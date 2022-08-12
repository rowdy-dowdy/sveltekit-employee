<script lang="ts">
	import Container from '$lib/components/Container.svelte';
  import { onMount } from 'svelte';
  import { clickOutside } from "$lib/utils/clickOutSide";
  import type { Staff, Attendance } from "$lib/types/staffs";
  import { fade } from "svelte/transition";

  const today = new Date()
  let first_day_in_month = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  let last_day_in_month = new Date(today.getFullYear(), today.getMonth() + 1 - 1, 0);

  let staffs: Staff[] | null = null
  
  onMount(async () => {
    const res = await fetch(`/api/attendances/all?first_day=${first_day_in_month.toISOString()}&last_day=${last_day_in_month.toISOString()}`);
    const data = await res.json();

    if (res.ok) {
      staffs = data.attendances
    }
  });

  const sortAttendanceByDate = (staffs: Staff[] | null) => {
    let temp_staffs: Staff[] = JSON.parse(JSON.stringify(staffs)) || []

    return temp_staffs.reduce((pre: any[], cur: Staff) => {
      let data_attendance = []

      for(let i = 1; i <= last_day_in_month.getDate(); i++) {
        // console.log('cur?.attendances',  cur?.attendances)
        if (cur?.attendances) {
          let temp_attendance_in_date = cur.attendances.filter(v => new Date(v.record_time).getDate() == i)

          // del to array
          temp_attendance_in_date.forEach(v => {
            let temp_index = cur.attendances.findIndex(v2 => v2.id == v.id)
            if (temp_index >= 0) {
              cur.attendances.splice(temp_index,1)
            }
          })

          data_attendance.push({
            date: i,
            attendances: temp_attendance_in_date,
            source: timekeepingScore(temp_attendance_in_date)
          })
        }
        else {
          data_attendance.push({
            date: i,
            attendances: [],
            source: 0
          })
        }
      }

      let total_source = data_attendance.reduce((pre2, cur2) => {
        return pre2 + cur2.source
      }, 0)

      return [...pre, {
        ...cur,
        data_attendance,
        total_source
      }]

    },[])
  }

  $: staffs_attendances = sortAttendanceByDate(staffs)

  const getTime = (time: Date) => {
    let temp_time = new Date(time)

    return `${temp_time.getHours() < 10 ? '0' + temp_time.getHours() : temp_time.getHours()}:
      ${temp_time.getMinutes() < 10 ? '0' + temp_time.getMinutes() : temp_time.getMinutes()}`
  }

  const timekeepingScore = (arr: Attendance[], detail = false) => {
    let early_morning: Date | null = null,
        late_morning: Date | null = null,
        early_afternoon: Date | null = null,
        late_afternoon: Date | null = null
    
    arr.forEach((v: Attendance) => {
      if (early_morning == null && getTime(v.record_time) >= '00:00' && getTime(v.record_time) <= '08:30')
        early_morning = v.record_time
      if (early_afternoon == null && getTime(v.record_time) > '12:30' && getTime(v.record_time) <= '14:30')
        early_afternoon = v.record_time
      if (getTime(v.record_time) >= '09:00' && getTime(v.record_time) <= '12:30')
        late_morning = v.record_time
      if (getTime(v.record_time) >= '15:00' && getTime(v.record_time) <= '20:00')
        late_afternoon = v.record_time
    })

    if (detail) {
      return {
        early_morning,
        late_morning,
        early_afternoon,
        late_afternoon
      }
    }

    let source = 0
    if (early_morning && getTime(early_morning) <= '08:00' || late_morning)
      source += .5
    if (early_afternoon && getTime(early_afternoon) <= '14:00' || late_afternoon)
      source += .5
    
    return source
  }

  const isSunday = (day: number) => {
    return !(new Date(today.getFullYear(), today.getMonth() - 1, day).getDay())
  }


  // model Detailed time attendance
  let show_model_detail = false
  let tab_model_detail = 'comments'

  const autoHeightTextArea = (e : KeyboardEvent) => {
    if (e.key == 'Enter' && e.shiftKey) {
      (e.target as HTMLElement).style.height = "auto";
      (e.target as HTMLElement).style.height = ((e.target as HTMLElement).scrollHeight) + "px";
    }
  }

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Container class="py-6">
    <div class="flex items-center justify-between">
      <div class="flex-none">
        <h3 class="text-3xl">Candidates</h3>
        <p>
          <span class="text-gray-500">Total Applicants</span>
          <span class="pl-3 text-2xl font-semibold">56</span>
        </p>
      </div>

      <div>
        <h4 class="text-3xl font-semibold text-teal-600">Mon, Aug 01</h4>
      </div>

      <div class="flex items-stretch space-x-2">
        <button class="px-4 py-2 rounded bg-teal-200 text-teal-600 hover:bg-teal-300">Now</button>
        <div class="w-0 border-r"></div>
        <button class="p-2 rounded border hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
        </button>
        <button class="p-2 rounded border hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        </button>
      </div>
    </div>

    <div class="mt-6 overflow-x-auto">
      <table class="table-custom w-full table-auto border-separate border-spacing-0">
        <thead>
          <tr class="bg-white rounded border shadow font-semibold">
            <th class="sticky left-0 border-r bg-white">
              <div class="flex items-center space-x-2">
                <span>Candidate Name</span>
                <span class="icon w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" ><path d="M6.227 11h11.547c.862 0 1.32-1.02.747-1.665L12.748 2.84a.998.998 0 0 0-1.494 0L5.479 9.335C4.906 9.98 5.364 11 6.227 11zm5.026 10.159a.998.998 0 0 0 1.494 0l5.773-6.495c.574-.644.116-1.664-.747-1.664H6.227c-.862 0-1.32 1.02-.747 1.665l5.773 6.494z"></path></svg>
                </span>

                {#if false}
                  <span class="icon w-4 h-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" ><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
                  </span>
                {/if}

                {#if false}
                  <span class="icon w-4 h-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" ><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path></svg>
                  </span>
                {/if}
              </div>
            </th>

            {#each new Array(last_day_in_month.getDate()) as _, i (i)}
              <th>
                { i + 1 }
              </th>
            {/each}

            <th class="sticky right-0 bg-white border-l">Total</th>
          </tr>
        </thead>

        <!-- <tbody class="h-5">
        </tbody> -->

        <tbody class="before:content-['\200C'] before:block before:leading-6">
          {#each staffs_attendances as staff (staff.id)}
            <tr>
              <td class="sticky left-0 border-r">
                <div class="flex w-max items-center space-x-2">
                  <img src="user.png" alt="user" class="block w-8 h-8 border rounded-full">
                  <h3 class="capitalize font-semibold">{staff.name}</h3>
                </div>
              </td>

              {#each new Array(last_day_in_month.getDate()) as _, i (i)}
                <td class="text-center hover:!bg-opacity-50 cursor-pointer {staff.data_attendance[i].source == 1 && '!bg-teal-400'} {staff.data_attendance[i].source == 0.5 && '!bg-teal-200'} {isSunday(i+1) && '!bg-red-300'}"
                  on:click|preventDefault="{() => show_model_detail = true}">
                  { staff.data_attendance[i].source }
                </td>
              {/each}

              <td class="sticky right-0 border-l !bg-amber-300 text-center">{ staff.total_source }</td>
            </tr>
          {/each}
          
        </tbody>
      </table>
    </div>

    <!-- modal -->
    {#if show_model_detail}
      <div transition:fade class="fixed top-0 left-0 bottom-0 right-0 bg-black/70 h-center">
        <div use:clickOutside on:click_outside={() => show_model_detail = false} class="w-full max-w-xl mx-auto bg-white px-8 py-12 rounded shadow">
          <button on:click|preventDefault="{() => show_model_detail = false}" class="float-right p-2 border rounded hover:bg-gray-200 -mt-8 -mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
          </button>

          <h3 class="text-3xl font-semibold text-gray-700">Detailed time attendance</h3>
          <table class="mt-4">
            <tr>
              <td class="text-left min-w-[100px] py-1 font-semibold text-gray-500">Assignee</td>
              <td class="text-gray-800 font-bold">Việt Hùng ít</td>
            </tr>
            <tr>
              <td class="text-left py-1 font-semibold text-gray-500">Date</td>
              <td class="text-gray-800 font-bold">12 Sep 2022</td>
            </tr>
            <tr>
              <td class="text-left py-1 font-semibold text-gray-500">Times</td>
              <td class="text-gray-800 font-bold">
                <div class="flex space-x-2">
                  <span class="px-2 py-0.5 rounded bg-amber-200 text-amber-700">07:25 - 11:35</span>
                  <span class="px-2 py-0.5 rounded bg-blue-200 text-blue-700">13:20 - 16:00</span>
                </div>
              </td>
            </tr>
          </table>

          <div class="flex mt-4 font-medium border-b-2 text-gray-500">
            <a href="{'#'}" on:click|preventDefault={() => tab_model_detail = 'comments'} 
              class="p-2 -mb-0.5 {tab_model_detail == 'comments' && 'text-gray-900 border-b-2 border-gray-800'}">
              Comments <span class="px-1 text-sm rounded bg-gray-200 pl-2">12</span>
            </a>
            <a href="{'#'}" on:click|preventDefault={() => tab_model_detail = 'description'} 
              class="p-2 -mb-0.5 {tab_model_detail == 'description' && 'text-gray-900 border-b-2 border-gray-800'}">Description</a>
            <a href="{'#'}" on:click|preventDefault={() => tab_model_detail = 'settings'} 
              class="p-2 -mb-0.5 {tab_model_detail == 'settings' && 'text-gray-900 border-b-2 border-gray-800'}">Settings</a>
          </div>

          <div class="mt-4">
            <div class="rounded-lg bg-gray-200 p-2">
              <textarea on:keypress={autoHeightTextArea} name="comment" id="comment" class="w-full bg-transparent max-h-52"></textarea>
              <div class="flex justify-end space-x-2 items-center text-gray-500">
                <span class="icon hover:text-gray-800 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858 4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62 5.963 5.963 0 0 0 2.148.903 6.035 6.035 0 0 0 3.542-.35 6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8 0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2 0 4.411-3.589 8-8 8z"></path></svg>
                </span>
                <span class="icon hover:text-gray-800 cursor-pointer">
                  <svg class="-rotate-45" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M17.004 5H9c-1.838 0-3.586.737-4.924 2.076C2.737 8.415 2 10.163 2 12c0 1.838.737 3.586 2.076 4.924C5.414 18.263 7.162 19 9 19h8v-2H9c-1.303 0-2.55-.529-3.51-1.49C4.529 14.55 4 13.303 4 12c0-1.302.529-2.549 1.49-3.51C6.45 7.529 7.697 7 9 7h8V6l.001 1h.003c.79 0 1.539.314 2.109.886.571.571.886 1.322.887 2.116a2.966 2.966 0 0 1-.884 2.11A2.988 2.988 0 0 1 17 13H9a.99.99 0 0 1-.698-.3A.991.991 0 0 1 8 12c0-.252.11-.507.301-.698A.987.987 0 0 1 9 11h8V9H9c-.79 0-1.541.315-2.114.889C6.314 10.461 6 11.211 6 12s.314 1.54.888 2.114A2.974 2.974 0 0 0 9 15h8.001a4.97 4.97 0 0 0 3.528-1.473 4.967 4.967 0 0 0-.001-7.055A4.95 4.95 0 0 0 17.004 5z"></path></svg>
                </span>

                <button class="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-700 text-white">Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
    
  </Container>
</section>

<style lang="postcss">
  .table-custom th, .table-custom td { @apply p-3 }
  .table-custom tbody tr:first-child td:first-child { @apply rounded-tl; }
  .table-custom tbody tr:first-child td:last-child { @apply rounded-tr; }

  .table-custom tbody tr:last-child td:first-child { @apply rounded-bl; }
  .table-custom tbody tr:last-child td:last-child { @apply rounded-br; }

  .table-custom tbody td { @apply bg-white border-t; }
  .table-custom tbody td:first-child { @apply border-l; }
  .table-custom tbody td:last-child { @apply border-r; }

  .table-custom tbody tr:last-child td { @apply border-b; }
</style>