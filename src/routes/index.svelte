<script setup lang="ts">
  import { Fetch } from "$lib/utils/fetch";
  // import { session } from '$app/stores'
  import Scrollbar from "smooth-scrollbar";
  import { onMount } from "svelte";

  onMount(async() => {
    Scrollbar.initAll()
  })
</script>

<div class="flex justify-center lg:justify-between relative -mt-16">
  <!-- LEFT MENU -->
  <div class="sticky top-0 pt-16 h-screen hidden xl:block" style="width: 22.5rem;">
    <div class="h-full flex flex-col overflow-auto" data-scrollbar>
      <ul class="py-2 pl-4">
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <img src="./img/avatar.jpg" alt="" class="w-9 h-9 rounded-full">
            <span>Nguyễn Việt Hùng</span>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <img src="./img/page.png" alt="" class="w-9 h-9 rounded-full">
            <span>Trang</span>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <img src="./img/friends.png" alt="" class="w-9 h-9 rounded-full">
            <span>Bạn bè</span>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <img src="./img/group.png" alt="" class="w-9 h-9 rounded-full">
            <span>Nhóm</span>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <img src="./img/messenger-kid.png" alt="" class="w-9 h-9 rounded-full">
            <span>Messenger nhí</span>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <span class="w-9 h-9 rounded-full bg-gray-300 grid place-items-center">
              <i class="bx bx-chevron-down font-bold text-2xl"></i>
            </span>
            <span>Xem thêm</span>
          </a>
        </li>
        <li class="border-b border-gray-300 mt-2"></li>
      </ul>
      <div class="flex justify-between items-center px-4 mt-2 h-6 group">
        <span class="text-gray-500 text-lg font-medium">Lối tắt của bạn</span>
        <span class="text-blue-500 cursor-pointer hover:bg-gray-200 p-2 rounded-md hidden group-hover:inline-block">Chỉnh sửa</span>
      </div>
      <ul class="p-4">
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <img src="./img/image-1.jpg" alt="" class="w-9 h-9 rounded-full">
            <span>Cộng đồng Front-end(HTML/CSS/JS) Việt Nam</span>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <img src="./img/image-2.jpg" alt="" class="w-9 h-9 rounded-full">
            <span>HỌC LẠI- CHẬM TIẾN ĐỘ KHOA CÔNG NGHỆ THÔNG TIN</span>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <img src="./img/image-3.jpg" alt="" class="w-9 h-9 rounded-full">
            <span>Khóa 98 - Long Sơn</span>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <img src="./img/image-4.jpg" alt="" class="w-9 h-9 rounded-full">
            <span>Chợ  Rao  Vặt  -  Sinh viên ICTU</span>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all px-1 py-2">
            <span class="w-9 h-9 rounded-full bg-gray-300 grid place-items-center">
              <i class="bx bx-chevron-down font-bold text-2xl"></i>
            </span>
            <span>Xem thêm</span>
          </a>
        </li>
      </ul>
      <div class="mt-auto px-6 pt-0 pb-2 text-sm text-gray-500">
        <a href="{'#'}" class="hover:underline">Quyền riêng tư</a>
        <span>.</span>
        <a href="{'#'}" class="hover:underline">Điều khoản</a>
        <span>.</span>
        <a href="{'#'}" class="hover:underline">Quảng cáo</a>
        <span>.</span>
        <a href="{'#'}" class="hover:underline">Lựa chọn quảng cáo</a>
        <span>.</span>
        <a href="{'#'}" class="hover:underline">Cookie</a>
        <span>.</span>
        <a href="{'#'}" class="hover:underline">Xem thêm</a>
        <span>.</span>
        <a href="{'#'}" class="hover:underline">Facebook @ 2021</a>
        <span>.</span>
      </div>
    </div>
  </div>
  <!-- END LEFT MENU -->


  <!-- MAIN CONTENT -->
  <div class="flex-grow max-w-2xl m-auto mt-0 pt-14 px-0 md:pt-16 md:px-8">
    <div class="flex space-x-2 pt-4 relative">
      <div class="w-1/4 md:w-1/5 rounded-xl overflow-hidden">
        <div class="relative group cursor-pointer" style="padding-top:177.77777777777777%">
          <img src="./img/story_1.jpg" alt="" class="group-hover:transform group-hover:scale-110 transition-all duration-300 h-full w-full absolute top-0 left-0">
          <div class="w-full h-full bg-black absolute top-0 left-0 opacity-10"></div>
          <span class="absolute bottom-0 left-0 p-2 text-white truncate max-h-10 w-full">Hà Minh Tuấn</span>
          <div class="w-10 h-10 rounded-full overflow-hidden absolute top-0 left-0 border-4 border-blue-500 m-3">
            <img src="./img/ha_tuan.jpg" alt="" class="w-10 h-10">
          </div>
        </div>
      </div>
      <div class="w-1/4 md:w-1/5 rounded-xl overflow-hidden">
        <div class="relative group cursor-pointer" style="padding-top:177.77777777777777%">
          <img src="./img/story_2.jpg" alt="" class="group-hover:transform group-hover:scale-110 transition-all duration-300 h-full w-full absolute top-0 left-0">
          <div class="w-full h-full bg-black absolute top-0 left-0 opacity-10"></div>
          <span class="absolute bottom-0 left-0 p-2 text-white truncate max-h-10 w-full">Thuỳ Dung</span>
          <div class="w-10 h-10 rounded-full overflow-hidden absolute top-0 left-0 border-4 border-blue-500 m-3">
            <img src="./img/thuy-dung.jpg" alt="" class="w-10 h-10">
          </div>
        </div>
      </div>
      <div class="w-1/4 md:w-1/5 rounded-xl overflow-hidden">
        <div class="relative group cursor-pointer" style="padding-top:177.77777777777777%">
          <img src="./img/story_3.jpg" alt="" class="group-hover:transform group-hover:scale-110 transition-all duration-300 h-full w-full absolute top-0 left-0">
          <div class="w-full h-full bg-black absolute top-0 left-0 opacity-10"></div>
          <span class="absolute bottom-0 left-0 p-2 text-white truncate max-h-10 w-full">Phạm Dương</span>
          <div class="w-10 h-10 rounded-full overflow-hidden absolute top-0 left-0 border-4 border-blue-500 m-3">
            <img src="./img/pham-duong.jpg" alt="" class="w-10 h-10">
          </div>
        </div>
      </div>
      <div class="w-1/4 md:w-1/5 rounded-xl overflow-hidden">
        <div class="relative group cursor-pointer" style="padding-top:177.77777777777777%">
          <img src="./img/story_4.jpg" alt="" class="group-hover:transform group-hover:scale-110 transition-all duration-300 h-full w-full absolute top-0 left-0">
          <div class="w-full h-full bg-black absolute top-0 left-0 opacity-10"></div>
          <span class="absolute bottom-0 left-0 p-2 text-white truncate max-h-10 w-full">Công Minh</span>
          <div class="w-10 h-10 rounded-full overflow-hidden absolute top-0 left-0 border-4 border-blue-500 m-3">
            <img src="./img/cong-minh.jpg" alt="" class="w-10 h-10">
          </div>
        </div>
      </div>
      <div class="hidden md:inline-block w-1/4 md:w-1/5 rounded-xl overflow-hidden">
        <div class="relative group cursor-pointer" style="padding-top:177.77777777777777%">
          <img src="./img/story_5.jpg" alt="" class="group-hover:transform group-hover:scale-110 transition-all duration-300 h-full w-full absolute top-0 left-0">
          <div class="w-full h-full bg-black absolute top-0 left-0 opacity-10"></div>
          <span class="absolute bottom-0 left-0 p-2 text-white truncate max-h-10 w-full">Quang Phong</span>
          <div class="w-10 h-10 rounded-full overflow-hidden absolute top-0 left-0 border-4 border-blue-500 m-3">
            <img src="./img/quang-phong.jpg" alt="" class="w-10 h-10">
          </div>
        </div>
      </div>
      <div class="w-12 h-12 rounded-full hidden md:grid place-items-center text-2xl bg-white absolute -right-6 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow text-gray-500">
        <i class="bx bx-right-arrow-alt"></i>
      </div>
    </div>

    <div class="my-4 bg-white rounded-lg shadow p-4">
      <div class="flex space-x-2 items-center">
        <a href="{'#'}" class="w-10 h-10 flex-none">
          <img src="img/avatar.jpg" alt="" class="w-full h-full rounded-full">
        </a>
        <a href="{'#'}" class="flex-grow inline-flex items-center rounded-full bg-gray-100 px-4 py-2">
          <span class="text-gray-600">Việt ơi, bạn đang nghĩ gì thế?</span>
        </a>
      </div>
      <div class=" flex mt-2 pt-2 border-t border-gray-200">
        <a href="{'#'}" class="h-10 justify-center inline-flex p-2 space-x-2 hover:bg-gray-100 rounded-lg flex-auto">
          <img src="./img/video-player.svg" alt="" class="w-6 h-6">
          <span class="whitespace-nowrap truncate text-gray-600 font-medium">Video trực tiếp</span>
        </a>
        <a href="{'#'}" class="h-10 justify-center inline-flex p-2 space-x-2 hover:bg-gray-100 rounded-lg flex-auto">
          <img src="./img/photo.svg" alt="" class="w-6 h-6">
          <span class="whitespace-nowrap truncate text-gray-600 font-medium">Ảnh/Video</span>
        </a>
        <a href="{'#'}" class="hidden md:inline-flex  h-10 p-2 space-x-2 hover:bg-gray-100 rounded-lg justify-center flex-auto">
          <img src="./img/smile.svg" alt="" class="w-6 h-6">
          <span class="whitespace-nowrap truncate text-gray-600 font-medium">Cảm xúc/Hoạt động</span>
        </a>
      </div>
    </div>

    <div class="rounded-lg shadow py-4 bg-white relative">
      <div class="flex overflow-hidden items-center justify-start space-x-4">
        <span class="flex-shrink-0"></span>
        <a href="{'#'}" class="inline-flex flex-shrink-0 h-10 items-center py-2 px-3 space-x-2 rounded-full border-2 border-blue-100 hover:bg-gray-100 ">
          <img src="./img/video_plus.png" alt="" class="grid place-items-center w-6">
          <span class="text-blue-600 font-medium">Tạo phòng họp mặt</span>
        </a>
        <a href="{'#'}" class=" flex-shrink-0 h-10 rounded-full overflow-hidden border border-gray-50 relative group">
          <img src="./img/cong-minh.jpg" alt="" class="w-10 h-10">
          <div class="absolute w-full h-full top-0 left-0 opacity-10 group-hover:bg-gray-500"></div>
        </a>
        <a href="{'#'}" class=" flex-shrink-0 h-10 rounded-full overflow-hidden border border-gray-50 relative group">
          <img src="./img/ha_tuan.jpg" alt="" class="w-10 h-10">
          <div class="absolute w-full h-full top-0 left-0 opacity-10 group-hover:bg-gray-500"></div>
        </a>
        <a href="{'#'}" class=" flex-shrink-0 h-10 rounded-full overflow-hidden border border-gray-50 relative group">
          <img src="./img/ha-nguyen.jpg" alt="" class="w-10 h-10">
          <div class="absolute w-full h-full top-0 left-0 opacity-10 group-hover:bg-gray-500"></div>
        </a>
        <a href="{'#'}" class=" flex-shrink-0 h-10 rounded-full overflow-hidden border border-gray-50 relative group">
          <img src="./img/minh_duc.jpg" alt="" class="w-10 h-10">
          <div class="absolute w-full h-full top-0 left-0 opacity-10 group-hover:bg-gray-500"></div>
        </a>
        <a href="{'#'}" class=" flex-shrink-0 h-10 rounded-full overflow-hidden border border-gray-50 relative group">
          <img src="./img/pham-duong.jpg" alt="" class="w-10 h-10">
          <div class="absolute w-full h-full top-0 left-0 opacity-10 group-hover:bg-gray-500"></div>
        </a>
        <a href="{'#'}" class=" flex-shrink-0 h-10 rounded-full overflow-hidden border border-gray-50 relative group">
          <img src="./img/nguyet.jpg" alt="" class="w-10 h-10">
          <div class="absolute w-full h-full top-0 left-0 opacity-10 group-hover:bg-gray-500"></div>
        </a>
        <a href="{'#'}" class=" flex-shrink-0 h-10 rounded-full overflow-hidden border border-gray-50 relative group">
          <img src="./img/viet-hoang.jpg" alt="" class="w-10 h-10">
          <div class="absolute w-full h-full top-0 left-0 opacity-10 group-hover:bg-gray-500"></div>
        </a>
        <a href="{'#'}" class=" flex-shrink-0 h-10 rounded-full overflow-hidden border border-gray-50 relative group">
          <img src="./img/vu-tien.jpg" alt="" class="w-10 h-10">
          <div class="absolute w-full h-full top-0 left-0 opacity-10 group-hover:bg-gray-500"></div>
        </a>
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-gray-200 shadow-md grid place-items-center hover:bg-gray-100">
          <i class='bx bxs-chevron-right text-2xl text-gray-600'></i>
        </div>
      </div>
    </div>
    
    <div class="mt-4 rounded-lg shadow bg-white">
      <div class="flex items-center space-x-3 p-4">
        <a href="{'#'}" class="h-10 w-10 flex-none rounded-full overflow-hidden">
          <img src="./img/thuy-dung.jpg" alt="" class="w-full h-full">
        </a>
        <div class="flex-grow">
          <a href="{'#'}">Nguyễn Thuỳ Dung</a>
          <div class="text-xs text-gray-600 flex items-center">
            <a href="{'#'}">5 Giờ</a>
            <span class="mx-2">.</span>
            <svg viewBox="0 0 430 430" class="w-3 h-3 fill-current text-gray-600">
              <path d="M215,0C96.451,0,0,96.451,0,215s96.451,215,215,215s215-96.451,215-215S333.549,0,215,0z M384.91,285.943  	c-21.135,50.439-64.104,89.547-117.032,105.441c0.949-1.762,1.868-3.543,2.757-5.344c4.547-9.202,9.325-15.69,17.344-22.161  	c6.137-4.956,18.186-12.632,16.216-22.311c-1.421-6.995-9.407-9.865-15.442-11.575c-9.575-2.713-19.818-3.416-29.699-4.1  	c-8.557-0.598-17.443-0.293-25.797-2.424c-12.502-3.182-15.32-14.004-16.111-25.412c-0.705-10.141-0.554-20.567-5.541-29.744  	c-6.422-11.811-21.202-15.17-33.458-16.297c-10.346-0.947-20.679-0.448-30.969-2.172c-9.9-1.658-19.276-5.135-29.442-4.741  	c-13.175,0.508-19.092,9.438-24.712,19.765c-2.774,5.1-20.296,44.321-30.591,53.115c-17.752-26.207-28.919-57.215-31.143-90.632  	c1.455-0.392,2.897-0.935,4.361-1.664c5.728-2.844,9.741-7.978,15.974-10.011c5.943-1.936,13.621-0.219,19.693,0.376  	c6.042,0.591,12.178,1.217,18.225,0.394c12.071-1.649,18.467-9.987,20.395-21.627c1.146-6.953,0.252-13.945,0.459-20.946  	c0.327-10.909,7.486-14.823,17.351-15.751c18.634-1.75,62.101,3.188,62.981-25.49c0.375-12.267-14.225-18.598-23.734-21.872  	c-18.516-6.37-38.747-4.146-57.685-8.571c-10.073-2.354-18.569-8.637-25.693-16.063C117.061,52.047,163.598,30.864,215,30.864  	c10.994,0,21.755,0.97,32.219,2.828c-5.35,0.994-10.631,2.406-15.769,4.481c-27.107,10.929-27.923,41.682-16.075,64.785  	c7.348,14.328,19.248,26.332,31.678,36.314c12.033,9.659,25.181,15.367,38.523,22.694c17.701,9.733,15.564,35.151,20.042,52.277  	c3.777,14.443,12.847,26.627,27.143,31.627c8.643,3.02,18.795,0.663,26.363,6.685c6.5,5.157,8.027,15.714,11.742,22.809  	C374.566,282.443,379.491,285.423,384.91,285.943z"/>
            </svg>

          </div>
        </div>
        <a href="{'#'}" class="w-9 h-9 rounded-full grid place-items-center hover:bg-gray-100">
          <i class="bx bx-dots-horizontal text-2xl text-gray-600"></i>
        </a>
      </div>

      <div class="px-4">
        <div>
          <div>Nếu như khoảng cách giữa anh và em là 1000 bước</div>
          <div>Thì em xin bước về nhà, nhà bao việc 😂</div>
        </div>
        <div class="mt-2">
          <div>#07_03 </div>
          <div class="hover:underline text-blue-500">#Chào_tối_chủ_nhật</div>
        </div>
      </div>

      <img src="./img/post-thuy-dung.jpg" alt="" class="w-full mt-4">
      <div class="border-l-2 border-blue-600 py-2 px-4 flex justify-start text-gray-600 items-center">
        <div class="flex-grow h-5 flex items-center justify-between min-w-0">
          <img src="./img/like.svg" alt="" class="h-5 w-5">
          <img src="./img/heart.svg" alt="" class="h-5 w-5">
          <img src="./img/laugh.svg" alt="" class="h-5 w-5">
          <a href="{'#'}" class="flex-grow ml-2 hover:underline h-5 truncate w-0 min-w-0">Tơ Nguyễn, Kim Oanh và 169 người khác</a>
        </div>
        <a href="{'#'}" class="flex-none hover:underline">128 Bình luận</a>
      </div>

      <div class="px-4">
        <div class="py-1 border-t border-b border-gray-400 text-gray-600 font-medium flex">
          <a href="{'#'}" class="flex flex-1 items-center justify-center space-x-2 rounded-lg py-1 hover:bg-gray-200">
            <i class='bx bx-like text-xl'></i>
            <span>Thích</span>
          </a>
          <a href="{'#'}" class="flex flex-1 items-center justify-center space-x-2 rounded-lg py-1 hover:bg-gray-200">
            <i class='bx bx-message-square text-xl'></i>
            <span>Bình luận</span>
          </a>
          <a href="{'#'}" class="flex flex-1 items-center justify-center space-x-2 rounded-lg py-1 hover:bg-gray-200">
            <i class='bx bx-share bx-flip-horizontal text-xl'></i>
            <span>Chia sẻ</span>
          </a>
        </div>
      </div>

      <div class="px-4 py-2">
        <div>
          <div class="w-full pb-2">
            <a href="{'#'}" class="hover:underline truncate min-w-0 text-gray-600 font-medium">Xem thêm 20 bình luận</a>
          </div>
          <div class="flex space-x-2">
            <div class="flex-none">
              <a href="{'#'}" class="flex w-8 h-8 rounded-full overflow-hidden relative">
                <img src="./img/dao_trang.jpg" alt="" class="w-full h-full">
                <div class="absolute w-full h-full top-0 left-0 opacity-10 hover:bg-gray-500"></div>
              </a>
            </div>
            <div class="flex-grow flex-col flex group">
              <div class="flex items-center space-x-1">
                <div class="rounded-xl bg-gray-100 p-2">
                  <a href="{'#'}" class="font-medium hover:underline">Đào trang</a>
                  <div>
                    <span class="break-all">Chào bà chủ !</span>
                  </div>
                </div>
                <a href="{'#'}" class="flex-none w-8 h-8 rounded-full overflow-hidden grid place-items-center hover:bg-gray-100 opacity-0 group-hover:opacity-100">
                  <i class="bx bx-dots-horizontal text-xl text-gray-600"></i>
                </a>
              </div>
              <div class="text-xs sm:text-sm text-gray-600 font-medium px-2 my-1">
                <a href="{'#'}" class="hover:underline">Thích</a>
                <span>.</span>
                <a href="{'#'}" class="hover:underline">Trả lời</a>
                <span>.</span>
                <a href="{'#'}" class="hover:underline font-normal">18 giờ</a>
              </div>
            </div>
          </div>

          <div class="pl-10">
            <div class="px-2 py-1 text-gray-600 group font-medium flex items-center">
              <i class='bx bx-subdirectory-right text-lg'></i>
              <a href="{'#'}" class=" ml-2 group-hover:underline">
                <span>Xem thêm 2 phản hồi</span>
              </a>
            </div>
            <div class="flex space-x-2">
              <div class="flex-none">
                <a href="{'#'}" class="flex w-6 h-6 mt-2 rounded-full overflow-hidden relative">
                  <img src="./img/thuy-dung.jpg" alt="" class="w-full h-full">
                  <div class="absolute w-full h-full top-0 left-0 opacity-10 hover:bg-gray-500"></div>
                </a>
              </div>
              <div class="flex-grow flex-col flex group">
                <div class="flex items-center space-x-1">
                  <div class="rounded-xl bg-gray-100 p-2">
                    <a href="{'#'}" class="font-medium hover:underline">Nguyễn Thuỳ Dung</a>
                    <div>
                      <span class="break-all">
                        <span class="font-medium hover:underline">Đào Trang</span>
                        book ngay cho t đi, để lấy luôn nào 😂🤣
                      </span>
                    </div>
                  </div>
                  <a href="{'#'}" class="flex-none w-8 h-8 rounded-full overflow-hidden grid place-items-center hover:bg-gray-100 opacity-0 group-hover:opacity-100">
                    <i class="bx bx-dots-horizontal text-xl text-gray-600"></i>
                  </a>
                </div>
                <div class="text-xs sm:text-sm text-gray-600 font-medium px-2 my-1">
                  <a href="{'#'}" class="hover:underline">Thích</a>
                  <span>.</span>
                  <a href="{'#'}" class="hover:underline">Trả lời</a>
                  <span>.</span>
                  <a href="{'#'}" class="hover:underline font-normal">18 giờ</a>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full pb-2">
            <a href="{'#'}" class="hover:underline truncate min-w-0 text-gray-600 font-medium">Xem thêm 2 bình luận</a>
          </div>
        </div>

        <div class="flex w-full items-center space-x-2 justify-between">
          <a href="{'#'}" class="w-8 h-8 rounded-full overflow-hidden">
            <img src="./img/avatar.jpg" alt="">
          </a>
          <div class="flex-grow flex border-none bg-gray-100 rounded-full h-9 text-gray-600">
            <input type="text" class="outline-none bg-transparent flex-grow pl-4 py-2 placeholder-gray-600 w-4" placeholder="Viết bình luận ...">
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <i class='bx bx-smile text-xl'></i>
            </a>
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <i class='bx bx-camera text-xl'></i>
            </a>
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <svg viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                <path d="M32,464V48c0-8.837,7.163-16,16-16h240v64c0,17.673,14.327,32,32,32h64v48h32v-64c0.025-4.253-1.645-8.341-4.64-11.36  				l-96-96C312.341,1.645,308.253-0.024,304,0H48C21.49,0,0,21.491,0,48v416c0,26.51,21.49,48,48,48h112v-32H48  				C39.164,480,32,472.837,32,464z"/>  			<path d="M512,288v-32h-80c-8.837,0-16,7.163-16,16v144h32v-64h64v-32h-64v-32H512z"/>  			<rect x="368" y="256" width="32" height="160"/>  			<path d="M352,288c0-17.673-14.327-32-32-32h-64c-17.673,0-32,14.327-32,32v96c0,17.673,14.327,32,32,32h64  				c17.673,0,32-14.327,32-32v-32c0-17.673-14.327-32-32-32h-32v32h32v32h-64v-96H352z"/>
              </svg>
            </a>
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <svg viewBox="0 0 128.000000 128.000000" class="w-5 h-5 fill-current">
                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)">
                  <path d="M327 1189 c-61 -15 -110 -44 -158 -96 -81 -86 -84 -103 -84 -453 0 -277 2 -310 19 -355 26 -66 103 -147 169 -176 49 -23 66 -24 293 -27 l242 -4 38 34 c104 89 312 274 332 296 l23 25 -3 261 c-3 247 -4 264 -26 311 -30 65 -102 138 -166 167 -49 22 -61 23 -346 25 -162 1 -312 -2 -333 -8z m679 -104 c30 -19 60 -49 79 -79 l30 -49 3 -239 3 -238 -111 0 c-131 0 -174 -16 -217 -82 -24 -36 -28 -52 -31 -140 l-4 -99 -218 3 -217 3 -49 30 c-30 19 -60 49 -79 79 l-30 49 -3 296 c-2 188 1 309 7 332 18 59 65 114 123 143 l53 27 306 -3 306 -3 49 -30z m42 -684 c-1 -5 -48 -49 -103 -99 l-100 -90 -3 60 c-4 70 13 102 61 123 35 16 151 20 145 6z"/>
                  <path d="M385 951 c-33 -14 -56 -47 -62 -89 -5 -34 -2 -42 16 -51 31 -17 61 2 61 39 0 23 4 30 20 30 16 0 20 -7 20 -30 0 -37 30 -56 61 -39 18 9 21 17 16 52 -9 67 -76 112 -132 88z"/>
                  <path d="M825 951 c-52 -23 -82 -102 -50 -134 9 -9 20 -17 25 -17 17 0 40 32 40 56 0 17 5 24 20 24 16 0 20 -7 20 -30 0 -37 30 -56 61 -39 18 9 21 17 16 52 -9 67 -76 112 -132 88z"/>
                  <path d="M474 703 c-23 -24 -14 -129 15 -177 68 -109 234 -109 302 0 29 48 38 153 15 177 -26 25 -306 25 -332 0z m266 -94 c0 -47 -47 -89 -100 -89 -53 0 -100 42 -100 89 l0 31 100 0 100 0 0 -31z"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 rounded-lg shadow bg-white">
      <div class="flex items-center space-x-3 p-4">
        <a href="{'#'}" class="h-10 w-10 flex-none rounded-full overflow-hidden">
          <img src="./img/tinh_cop.jpg" alt="" class="w-full h-full">
        </a>
        <div class="flex-grow">
          <a href="{'#'}">
            Tình cốp
            <span class="text-gray-600">Đã cập nhập ảnh đại diện của cô ấy</span>
          </a>
          <div class="text-xs text-gray-600 flex items-center">
            <a href="{'#'}">6 Giờ</a>
            <span class="mx-2">.</span>
            <svg viewBox="0 0 430 430" class="w-3 h-3 fill-current text-gray-600">
              <path d="M215,0C96.451,0,0,96.451,0,215s96.451,215,215,215s215-96.451,215-215S333.549,0,215,0z M384.91,285.943  	c-21.135,50.439-64.104,89.547-117.032,105.441c0.949-1.762,1.868-3.543,2.757-5.344c4.547-9.202,9.325-15.69,17.344-22.161  	c6.137-4.956,18.186-12.632,16.216-22.311c-1.421-6.995-9.407-9.865-15.442-11.575c-9.575-2.713-19.818-3.416-29.699-4.1  	c-8.557-0.598-17.443-0.293-25.797-2.424c-12.502-3.182-15.32-14.004-16.111-25.412c-0.705-10.141-0.554-20.567-5.541-29.744  	c-6.422-11.811-21.202-15.17-33.458-16.297c-10.346-0.947-20.679-0.448-30.969-2.172c-9.9-1.658-19.276-5.135-29.442-4.741  	c-13.175,0.508-19.092,9.438-24.712,19.765c-2.774,5.1-20.296,44.321-30.591,53.115c-17.752-26.207-28.919-57.215-31.143-90.632  	c1.455-0.392,2.897-0.935,4.361-1.664c5.728-2.844,9.741-7.978,15.974-10.011c5.943-1.936,13.621-0.219,19.693,0.376  	c6.042,0.591,12.178,1.217,18.225,0.394c12.071-1.649,18.467-9.987,20.395-21.627c1.146-6.953,0.252-13.945,0.459-20.946  	c0.327-10.909,7.486-14.823,17.351-15.751c18.634-1.75,62.101,3.188,62.981-25.49c0.375-12.267-14.225-18.598-23.734-21.872  	c-18.516-6.37-38.747-4.146-57.685-8.571c-10.073-2.354-18.569-8.637-25.693-16.063C117.061,52.047,163.598,30.864,215,30.864  	c10.994,0,21.755,0.97,32.219,2.828c-5.35,0.994-10.631,2.406-15.769,4.481c-27.107,10.929-27.923,41.682-16.075,64.785  	c7.348,14.328,19.248,26.332,31.678,36.314c12.033,9.659,25.181,15.367,38.523,22.694c17.701,9.733,15.564,35.151,20.042,52.277  	c3.777,14.443,12.847,26.627,27.143,31.627c8.643,3.02,18.795,0.663,26.363,6.685c6.5,5.157,8.027,15.714,11.742,22.809  	C374.566,282.443,379.491,285.423,384.91,285.943z"/>
            </svg>

          </div>
        </div>
        <a href="{'#'}" class="w-9 h-9 rounded-full grid place-items-center hover:bg-gray-100">
          <i class="bx bx-dots-horizontal text-2xl text-gray-600"></i>
        </a>
      </div>

      <div class="px-4">
        <div>
          <div>Suốt bao năm lòng em luôn yên tĩnh😉</div>
          <div>Gặp anh rồi tĩnh lặng hóa phong ba🍃</div>
        </div>
      </div>

      <img src="./img/tinh_cop.jpg" alt="" class="w-full mt-4">
      <div class="border-l-2 border-blue-600 py-2 px-4 flex justify-start text-gray-600 items-center">
        <div class="flex-grow h-5 flex items-center justify-between min-w-0">
          <img src="./img/like.svg" alt="" class="h-5 w-5">
          <img src="./img/heart.svg" alt="" class="h-5 w-5">
          <img src="./img/laugh.svg" alt="" class="h-5 w-5">
          <a href="{'#'}" class="flex-grow ml-2 hover:underline h-5 truncate w-0 min-w-0">Thế Hiệp, Nguyễn Thùy Dung và 241 người khác</a>
        </div>
        <a href="{'#'}" class="flex-none hover:underline">107 Bình luận</a>
      </div>

      <div class="px-4">
        <div class="py-1 border-t border-b border-gray-400 text-gray-600 font-medium flex">
          <a href="{'#'}" class="flex flex-1 items-center justify-center space-x-2 rounded-lg py-1 hover:bg-gray-200">
            <i class='bx bx-like text-xl'></i>
            <span>Thích</span>
          </a>
          <a href="{'#'}" class="flex flex-1 items-center justify-center space-x-2 rounded-lg py-1 hover:bg-gray-200">
            <i class='bx bx-message-square text-xl'></i>
            <span>Bình luận</span>
          </a>
          <a href="{'#'}" class="flex flex-1 items-center justify-center space-x-2 rounded-lg py-1 hover:bg-gray-200">
            <i class='bx bx-share bx-flip-horizontal text-xl'></i>
            <span>Chia sẻ</span>
          </a>
        </div>
      </div>

      <div class="px-4 py-2">
        <div>
          <div class="w-full pb-2">
            <a href="{'#'}" class="hover:underline truncate min-w-0 text-gray-600 font-medium">Xem các bình luận trước</a>
          </div>
          <div class="flex space-x-2">
            <div class="flex-none">
              <a href="{'#'}" class="flex w-8 h-8 rounded-full overflow-hidden relative">
                <img src="./img/xuan_nguyen.jpg" alt="" class="w-full h-full">
                <div class="absolute w-full h-full top-0 left-0 opacity-10 hover:bg-gray-500"></div>
              </a>
            </div>
            <div class="flex-grow flex-col flex group">
              <div class="flex items-center space-x-1">
                <div class="rounded-xl bg-gray-100 p-2">
                  <a href="{'#'}" class="font-medium hover:underline">Đào trang</a>
                  <div>
                    <span class="break-all">Thật á?!</span>
                  </div>
                </div>
                <a href="{'#'}" class="flex-none w-8 h-8 rounded-full overflow-hidden grid place-items-center hover:bg-gray-100 opacity-0 group-hover:opacity-100">
                  <i class="bx bx-dots-horizontal text-xl text-gray-600"></i>
                </a>
              </div>
              <div class="text-xs sm:text-sm text-gray-600 font-medium px-2 my-1">
                <a href="{'#'}" class="hover:underline">Thích</a>
                <span>.</span>
                <a href="{'#'}" class="hover:underline">Trả lời</a>
                <span>.</span>
                <a href="{'#'}" class="hover:underline font-normal">8p</a>
              </div>
            </div>
          </div>

          <div class="pl-10">
            <div class="px-2 py-1 text-gray-600 group font-medium flex items-center">
              <i class='bx bx-subdirectory-right text-lg'></i>
              <a href="{'#'}" class=" ml-2 group-hover:underline">
                <span>3 phản hồi</span>
              </a>
            </div>
          </div>
        </div>

        <div class="flex w-full items-center space-x-2 justify-between">
          <a href="{'#'}" class="w-8 h-8 rounded-full overflow-hidden">
            <img src="./img/avatar.jpg" alt="">
          </a>
          <div class="flex-grow flex border-none bg-gray-100 rounded-full h-9 text-gray-600">
            <input type="text" class="outline-none bg-transparent flex-grow pl-4 py-2 placeholder-gray-600 w-4" placeholder="Viết bình luận ...">
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <i class='bx bx-smile text-xl'></i>
            </a>
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <i class='bx bx-camera text-xl'></i>
            </a>
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <svg viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                <path d="M32,464V48c0-8.837,7.163-16,16-16h240v64c0,17.673,14.327,32,32,32h64v48h32v-64c0.025-4.253-1.645-8.341-4.64-11.36  				l-96-96C312.341,1.645,308.253-0.024,304,0H48C21.49,0,0,21.491,0,48v416c0,26.51,21.49,48,48,48h112v-32H48  				C39.164,480,32,472.837,32,464z"/>  			<path d="M512,288v-32h-80c-8.837,0-16,7.163-16,16v144h32v-64h64v-32h-64v-32H512z"/>  			<rect x="368" y="256" width="32" height="160"/>  			<path d="M352,288c0-17.673-14.327-32-32-32h-64c-17.673,0-32,14.327-32,32v96c0,17.673,14.327,32,32,32h64  				c17.673,0,32-14.327,32-32v-32c0-17.673-14.327-32-32-32h-32v32h32v32h-64v-96H352z"/>
              </svg>
            </a>
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <svg viewBox="0 0 128.000000 128.000000" class="w-5 h-5 fill-current">
                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)">
                  <path d="M327 1189 c-61 -15 -110 -44 -158 -96 -81 -86 -84 -103 -84 -453 0 -277 2 -310 19 -355 26 -66 103 -147 169 -176 49 -23 66 -24 293 -27 l242 -4 38 34 c104 89 312 274 332 296 l23 25 -3 261 c-3 247 -4 264 -26 311 -30 65 -102 138 -166 167 -49 22 -61 23 -346 25 -162 1 -312 -2 -333 -8z m679 -104 c30 -19 60 -49 79 -79 l30 -49 3 -239 3 -238 -111 0 c-131 0 -174 -16 -217 -82 -24 -36 -28 -52 -31 -140 l-4 -99 -218 3 -217 3 -49 30 c-30 19 -60 49 -79 79 l-30 49 -3 296 c-2 188 1 309 7 332 18 59 65 114 123 143 l53 27 306 -3 306 -3 49 -30z m42 -684 c-1 -5 -48 -49 -103 -99 l-100 -90 -3 60 c-4 70 13 102 61 123 35 16 151 20 145 6z"/>
                  <path d="M385 951 c-33 -14 -56 -47 -62 -89 -5 -34 -2 -42 16 -51 31 -17 61 2 61 39 0 23 4 30 20 30 16 0 20 -7 20 -30 0 -37 30 -56 61 -39 18 9 21 17 16 52 -9 67 -76 112 -132 88z"/>
                  <path d="M825 951 c-52 -23 -82 -102 -50 -134 9 -9 20 -17 25 -17 17 0 40 32 40 56 0 17 5 24 20 24 16 0 20 -7 20 -30 0 -37 30 -56 61 -39 18 9 21 17 16 52 -9 67 -76 112 -132 88z"/>
                  <path d="M474 703 c-23 -24 -14 -129 15 -177 68 -109 234 -109 302 0 29 48 38 153 15 177 -26 25 -306 25 -332 0z m266 -94 c0 -47 -47 -89 -100 -89 -53 0 -100 42 -100 89 l0 31 100 0 100 0 0 -31z"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 rounded-lg shadow bg-white">
      <div class="py-2 mx-4 w-ful border-b border-gray-300">
        <a href="{'#'}" class="hover:underline font-medium">Ngọc Minh thiện</a>
        <span class="text-gray-600">đã được gắn thẻ.</span>
      </div>
      <div class="flex items-center space-x-3 p-4">
        <a href="{'#'}" class="h-10 w-10 flex-none rounded-full overflow-hidden">
          <img src="./img/huong_kem.jpg" alt="" class="w-full h-full">
        </a>
        <div class="flex-grow">
          <a href="{'#'}">
            <span class="hover:underline">Hường Kem</span>
            <span class="text-gray-600">cùng với</span>
            <span class="hover:underline">Ngọc Minh Thiện</span>
          </a>
          <div class="text-xs text-gray-600 flex items-center">
            <a href="{'#'}">20 Giờ</a>
            <span class="mx-2">.</span>
            <svg viewBox="0 0 430 430" class="w-3 h-3 fill-current text-gray-600">
              <path d="M215,0C96.451,0,0,96.451,0,215s96.451,215,215,215s215-96.451,215-215S333.549,0,215,0z M384.91,285.943  	c-21.135,50.439-64.104,89.547-117.032,105.441c0.949-1.762,1.868-3.543,2.757-5.344c4.547-9.202,9.325-15.69,17.344-22.161  	c6.137-4.956,18.186-12.632,16.216-22.311c-1.421-6.995-9.407-9.865-15.442-11.575c-9.575-2.713-19.818-3.416-29.699-4.1  	c-8.557-0.598-17.443-0.293-25.797-2.424c-12.502-3.182-15.32-14.004-16.111-25.412c-0.705-10.141-0.554-20.567-5.541-29.744  	c-6.422-11.811-21.202-15.17-33.458-16.297c-10.346-0.947-20.679-0.448-30.969-2.172c-9.9-1.658-19.276-5.135-29.442-4.741  	c-13.175,0.508-19.092,9.438-24.712,19.765c-2.774,5.1-20.296,44.321-30.591,53.115c-17.752-26.207-28.919-57.215-31.143-90.632  	c1.455-0.392,2.897-0.935,4.361-1.664c5.728-2.844,9.741-7.978,15.974-10.011c5.943-1.936,13.621-0.219,19.693,0.376  	c6.042,0.591,12.178,1.217,18.225,0.394c12.071-1.649,18.467-9.987,20.395-21.627c1.146-6.953,0.252-13.945,0.459-20.946  	c0.327-10.909,7.486-14.823,17.351-15.751c18.634-1.75,62.101,3.188,62.981-25.49c0.375-12.267-14.225-18.598-23.734-21.872  	c-18.516-6.37-38.747-4.146-57.685-8.571c-10.073-2.354-18.569-8.637-25.693-16.063C117.061,52.047,163.598,30.864,215,30.864  	c10.994,0,21.755,0.97,32.219,2.828c-5.35,0.994-10.631,2.406-15.769,4.481c-27.107,10.929-27.923,41.682-16.075,64.785  	c7.348,14.328,19.248,26.332,31.678,36.314c12.033,9.659,25.181,15.367,38.523,22.694c17.701,9.733,15.564,35.151,20.042,52.277  	c3.777,14.443,12.847,26.627,27.143,31.627c8.643,3.02,18.795,0.663,26.363,6.685c6.5,5.157,8.027,15.714,11.742,22.809  	C374.566,282.443,379.491,285.423,384.91,285.943z"/>
            </svg>

          </div>
        </div>
        <a href="{'#'}" class="w-9 h-9 rounded-full grid place-items-center hover:bg-gray-100">
          <i class="bx bx-dots-horizontal text-2xl text-gray-600"></i>
        </a>
      </div>

      <div class="px-4">
        <div>
          <div>Ăn cơm chục chén lưng lưng 🥤🍮🍰</div>
          <div>Trà sữa cầm chừng để bụng thương anh ❤️</div>
        </div>
        <div class="mt-2">
          <div class="hover:underline text-blue-500">#NMT</div>
          🥰
        </div>
      </div>

      <img src="./img/post_huong_kem.jpg" alt="" class="w-full mt-4">
      <div class="border-l-2 border-blue-600 py-2 px-4 flex justify-start text-gray-600 items-center">
        <div class="flex-grow h-5 flex items-center justify-between min-w-0">
          <img src="./img/like.svg" alt="" class="h-5 w-5">
          <img src="./img/heart.svg" alt="" class="h-5 w-5">
          <img src="./img/laugh.svg" alt="" class="h-5 w-5">
          <a href="{'#'}" class="flex-grow ml-2 hover:underline h-5 truncate w-0 min-w-0">245</a>
        </div>
        <a href="{'#'}" class="flex-none hover:underline">54 Bình luận</a>
      </div>

      <div class="px-4">
        <div class="py-1 border-t border-b border-gray-400 text-gray-600 font-medium flex">
          <a href="{'#'}" class="flex flex-1 items-center justify-center space-x-2 rounded-lg py-1 hover:bg-gray-200">
            <i class='bx bx-like text-xl'></i>
            <span>Thích</span>
          </a>
          <a href="{'#'}" class="flex flex-1 items-center justify-center space-x-2 rounded-lg py-1 hover:bg-gray-200">
            <i class='bx bx-message-square text-xl'></i>
            <span>Bình luận</span>
          </a>
          <a href="{'#'}" class="flex flex-1 items-center justify-center space-x-2 rounded-lg py-1 hover:bg-gray-200">
            <i class='bx bx-share bx-flip-horizontal text-xl'></i>
            <span>Chia sẻ</span>
          </a>
        </div>
      </div>

      <div class="px-4 py-2">
        <div>
          <div class="w-full pb-2">
            <a href="{'#'}" class="hover:underline truncate min-w-0 text-gray-600 font-medium">Xem các bình luận trước</a>
          </div>
          <div class="flex space-x-2">
            <div class="flex-none">
              <a href="{'#'}" class="flex w-8 h-8 rounded-full overflow-hidden relative">
                <img src="./img/anh_nien.jpg" alt="" class="w-full h-full">
                <div class="absolute w-full h-full top-0 left-0 opacity-10 hover:bg-gray-500"></div>
              </a>
            </div>
            <div class="flex-grow flex-col flex group">
              <div class="flex items-center space-x-1">
                <div class="rounded-xl bg-gray-100 p-2">
                  <a href="{'#'}" class="font-medium hover:underline">Anh niên</a>
                  <div>
                    <span class="break-all">Chốt đơn ❤</span>
                  </div>
                </div>
                <a href="{'#'}" class="flex-none w-8 h-8 rounded-full overflow-hidden grid place-items-center hover:bg-gray-100 opacity-0 group-hover:opacity-100">
                  <i class="bx bx-dots-horizontal text-xl text-gray-600"></i>
                </a>
              </div>
              <div class="text-xs sm:text-sm text-gray-600 font-medium px-2 my-1">
                <a href="{'#'}" class="hover:underline">Thích</a>
                <span>.</span>
                <a href="{'#'}" class="hover:underline">Trả lời</a>
                <span>.</span>
                <a href="{'#'}" class="hover:underline font-normal">8p</a>
              </div>
            </div>
          </div>

          <div class="pl-10">
            <div class="px-2 py-1 text-gray-600 group font-medium flex items-center">
              <i class='bx bx-subdirectory-right text-lg'></i>
              <a href="{'#'}" class=" ml-2 group-hover:underline">
                <span>Ngọc Minh Thiện đã trả lời . 1 phản hồi <span class="font-normal">7 giờ trước</span></span>
              </a>
            </div>
          </div>
        </div>

        <div class="flex w-full items-center space-x-2 justify-between">
          <a href="{'#'}" class="w-8 h-8 rounded-full overflow-hidden">
            <img src="./img/avatar.jpg" alt="">
          </a>
          <div class="flex-grow flex border-none bg-gray-100 rounded-full h-9 text-gray-600">
            <input type="text" class="outline-none bg-transparent flex-grow pl-4 py-2 placeholder-gray-600 w-4" placeholder="Viết bình luận ...">
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <i class='bx bx-smile text-xl'></i>
            </a>
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <i class='bx bx-camera text-xl'></i>
            </a>
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <svg viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                <path d="M32,464V48c0-8.837,7.163-16,16-16h240v64c0,17.673,14.327,32,32,32h64v48h32v-64c0.025-4.253-1.645-8.341-4.64-11.36  				l-96-96C312.341,1.645,308.253-0.024,304,0H48C21.49,0,0,21.491,0,48v416c0,26.51,21.49,48,48,48h112v-32H48  				C39.164,480,32,472.837,32,464z"/>  			<path d="M512,288v-32h-80c-8.837,0-16,7.163-16,16v144h32v-64h64v-32h-64v-32H512z"/>  			<rect x="368" y="256" width="32" height="160"/>  			<path d="M352,288c0-17.673-14.327-32-32-32h-64c-17.673,0-32,14.327-32,32v96c0,17.673,14.327,32,32,32h64  				c17.673,0,32-14.327,32-32v-32c0-17.673-14.327-32-32-32h-32v32h32v32h-64v-96H352z"/>
              </svg>
            </a>
            <a href="{'#'}" class="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200">
              <svg viewBox="0 0 128.000000 128.000000" class="w-5 h-5 fill-current">
                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)">
                  <path d="M327 1189 c-61 -15 -110 -44 -158 -96 -81 -86 -84 -103 -84 -453 0 -277 2 -310 19 -355 26 -66 103 -147 169 -176 49 -23 66 -24 293 -27 l242 -4 38 34 c104 89 312 274 332 296 l23 25 -3 261 c-3 247 -4 264 -26 311 -30 65 -102 138 -166 167 -49 22 -61 23 -346 25 -162 1 -312 -2 -333 -8z m679 -104 c30 -19 60 -49 79 -79 l30 -49 3 -239 3 -238 -111 0 c-131 0 -174 -16 -217 -82 -24 -36 -28 -52 -31 -140 l-4 -99 -218 3 -217 3 -49 30 c-30 19 -60 49 -79 79 l-30 49 -3 296 c-2 188 1 309 7 332 18 59 65 114 123 143 l53 27 306 -3 306 -3 49 -30z m42 -684 c-1 -5 -48 -49 -103 -99 l-100 -90 -3 60 c-4 70 13 102 61 123 35 16 151 20 145 6z"/>
                  <path d="M385 951 c-33 -14 -56 -47 -62 -89 -5 -34 -2 -42 16 -51 31 -17 61 2 61 39 0 23 4 30 20 30 16 0 20 -7 20 -30 0 -37 30 -56 61 -39 18 9 21 17 16 52 -9 67 -76 112 -132 88z"/>
                  <path d="M825 951 c-52 -23 -82 -102 -50 -134 9 -9 20 -17 25 -17 17 0 40 32 40 56 0 17 5 24 20 24 16 0 20 -7 20 -30 0 -37 30 -56 61 -39 18 9 21 17 16 52 -9 67 -76 112 -132 88z"/>
                  <path d="M474 703 c-23 -24 -14 -129 15 -177 68 -109 234 -109 302 0 29 48 38 153 15 177 -26 25 -306 25 -332 0z m266 -94 c0 -47 -47 -89 -100 -89 -53 0 -100 42 -100 89 l0 31 100 0 100 0 0 -31z"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END MAIN CONTENT -->


  <!-- RIGHT MENU -->
  <div class="sticky top-0 pt-16 h-screen hidden lg:block">
    <div class="h-full overflow-auto overscroll-auto" style="width: 22.5rem;" data-scrollbar>
      <div class="flex justify-between items-center px-2 h-4 mt-4">
        <span class="text-gray-500 text-lg font-medium">Sinh nhật</span>
      </div>
      <ul class=" px-2 py-4">
        <li>
          <a href="{'#'}" class="flex items-center space-x-2 hover:bg-gray-200 rounded-lg transition-all p-2">
            <span class="w-9 h-9 rounded-full bg-gray-300 grid place-items-center">
              <img src="./img/gift.png" alt="">
            </span>
            <span>
              Hôm nay là sinh nhật của
              <span class="font-medium">Anh Hoang</span>
            </span>
          </a>
        </li>
        <li class="border-b border-gray-300 mt-2"></li>
      </ul>
      <div class="flex justify-between items-center px-2 h-6">
        <span class="text-gray-500 text-lg font-medium">Người liên hệ</span>
        <div class="flex items-center justify-center text-gray-500 space-x-1">
          <a href="{'#'}" class="rounded-full hover:bg-gray-300 grid place-items-center h-8 w-8">
            <i class='bx bxs-video-plus text-xl'></i>
          </a>
          <a href="{'#'}" class="rounded-full hover:bg-gray-300 grid place-items-center h-8 w-8">
            <i class='bx bx-search-alt-2 text-xl'></i>
          </a>
          <a href="{'#'}" class="rounded-full hover:bg-gray-300 grid place-items-center h-8 w-8">
            <i class='bx bx-dots-horizontal-rounded text-xl'></i>
          </a>
        </div>
      </div>
      <ul class="px-2 py-4">
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/anh-thu.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Vũ Lan Anh Thư</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/thuy-dung.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Nguyễn Thuỳ Dung</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/ha-nguyen.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Hà Nguyễn</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/tung-thanh.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Tùng Thanh</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/nguyet.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Nguyệt</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/tien-oc.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Tiện Ốc</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/pham-dung.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Phạm Dũng</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/hoang-anh.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Hoàng Anh</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/quang-phong.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Quang Phong</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/vu-tien.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Vũ Tiến</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/viet-hoang.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Việt Hoàng</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/ha_tuan.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Hà Minh Tuấn</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/minh_duc.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Minh Đức</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/ha_tuan.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Tuấn Phạm</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative">
              <img src="./img/long_nguyen.jpg" alt="" class="rounded-full w-9 h-9">
              <span class="w-3 h-3 rounded-full bg-green-500 absolute right-0 top-3/4 border-white border-2"></span>
            </div>
            <div>Long Nguyễn</div>
          </a>
        </li>
        <li class="border-b border-gray-300 mt-2"></li>
      </ul>
      <div class="flex justify-between items-center px-2 h-6">
        <span class="text-gray-500 text-lg font-medium">Cuộc trò chuyện nhóm</span>
      </div>
      <ul class=" px-2 py-4">
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative w-9 h-9">
              <img src="./img/minh_duc.jpg" alt="" class="rounded-full w-6 h-6 absolute top-0 right-0 border border-gray-200">
              <img src="img/tung-thanh.jpg" alt="" class="rounded-full w-6 h-6 absolute bottom-0 left-0 border border-gray-200">
            </div>
            <div class="flex-1">Over Night❤😘😘</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative w-9 h-9">
              <img src="./img/viet-hoang.jpg" alt="" class="rounded-full w-6 h-6 absolute top-0 right-0 border border-gray-200">
              <img src="img/quang-phong.jpg" alt="" class="rounded-full w-6 h-6 absolute bottom-0 left-0 border border-gray-200">
            </div>
            <div class="flex-1">chơi là phải nghiêm túc, nghiêm cấm hành vi tấu hài :))</div>
          </a>
        </li>
        <li>
          <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-lg p-2">
            <div class="relative w-9 h-9">
              <img src="./img/pham-duong.jpg" alt="" class="rounded-full w-6 h-6 absolute top-0 right-0 border border-gray-200">
              <img src="img/ha_tuan.jpg" alt="" class="rounded-full w-6 h-6 absolute bottom-0 left-0 border border-gray-200">
            </div>
            <div class="flex-1">BFF ...</div>
          </a>
        </li>
      </ul>
      <div class="px-2 -mt-4">
        <a href="{'#'}" class="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
          <div class="w-9 h-9 rounded-full grid place-items-center bg-gray-300">
            <i class='bx bx-plus'></i>
          </div>
          <div class="flex-1">Tạo nhóm mới</div>
        </a>
      </div>
    </div>
  </div>
  <!-- END RIGHT MENU -->
</div>

<style global>
  .scrollbar-track {
    transition: opacity 0.3s ease-in-out !important;
  }

  [data-scrollbar]:hover .scrollbar-track{
    opacity: 1 !important;
  }
</style>