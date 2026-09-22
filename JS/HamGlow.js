const Body = document.querySelector(".Body");


// Create Main Frames & Subframes

const mainFrames = ["Home", "Community", "Email", "Share", "Settings", "Support", "Log Out"]

const subFrames = ["Recent", "Adobe XD", "Figma", "Sketch", "Frames", "Icons", "Pallets", "Vectors"]


mainFrames.forEach(mainFrame => {

    Body.innerHTML += `

     <div class="frame N">

      <div class="content">

       <div class="slide">
        <h1>${mainFrame}</h1>
       </div>

      </div>

     </div>

  `;

});


subFrames.forEach(subFrame => {

    Body.innerHTML += `

    <section class="frame S">
      
     <div class="content">

      <div class="slide">
       <h1>${subFrame}</h1>
      </div>

     </div>

      <header class="Header">
  
       <svg class="back" width="35" height="35" viewBox="0 0 35 35" fill="none">
        <path d="M17.0769 22.5L12 17.5L17.0769 12.5M12.7051 17.5H23" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>

      </header>

    </section>

  `;

});


const Frames = document.querySelectorAll(".frame.N");
const FrameSs = document.querySelectorAll(".frame.S");
const Backs = document.querySelectorAll(".back");

Frames[0].classList.add("active");


const SideNavbar = document.querySelector(".side-navbar");


// Create Items

const items = [

 {class1: "item", class2: "item-btn N active", text: "Home", svg: "M20.7516 14.4099L15.2994 9.12048C15.2601 9.08233 15.2135 9.05194 15.1622 9.03136C15.1108 9.01068 15.0558 9 15.0002 9C14.9447 9 14.8896 9.01068 14.8383 9.03136C14.787 9.05194 14.7404 9.08233 14.7011 9.12048L9.2489 14.4099C9.09 14.5641 9 14.7736 9 14.992C9 15.4457 9.3799 15.8145 9.8472 15.8145H10.4216V20.59C10.4216 20.8175 10.6109 21 10.8452 21H14.1531V18.12H15.6356V21H19.1553C19.3896 21 19.5789 20.8175 19.5789 20.59V15.8145H20.1533C20.3784 15.8145 20.5941 15.7284 20.753 15.5729C21.0826 15.2516 21.0826 14.7312 20.7516 14.4099Z"},
 {class1: "item menu", class2: "item-btn", text: "Projects", svg: "M9.5 11.25C9.5 10.9185 9.6288 10.6005 9.858 10.3661C10.0872 10.1317 10.3981 10 10.7222 10H13.1239C13.3251 9.99997 13.5231 10.0507 13.7005 10.1478C13.8779 10.2448 14.0291 10.3851 14.1408 10.5563L14.637 11.3187C14.7486 11.4899 14.8999 11.6302 15.0773 11.7273C15.2547 11.8242 15.4527 11.8751 15.6539 11.875H19.2778C19.6019 11.875 19.9128 12.0067 20.142 12.2411C20.3712 12.4755 20.5 12.7935 20.5 13.125V18.75C20.5 19.0815 20.3712 19.3995 20.142 19.6339C19.9128 19.8683 19.6019 20 19.2778 20H10.7222C10.3981 20 10.0872 19.8683 9.858 19.6339C9.6288 19.3995 9.5 19.0815 9.5 18.75V11.25Z"},
 {class1: "item menu", class2: "item-btn", text: "Pluggins", svg: "M15.3194 16.4244V19.9178C15.3194 20.238 15.5812 20.5 15.9013 20.5H19.3929C19.713 20.5 19.9748 20.238 19.9748 19.9178V16.4244C19.9748 16.1041 19.713 15.842 19.3929 15.842H15.9013C15.5812 15.842 15.3194 16.1041 15.3194 16.4244ZM10.0819 20.5H13.5735C13.8936 20.5 14.1555 20.238 14.1555 19.9178V16.4244C14.1555 16.1041 13.8936 15.842 13.5735 15.842H10.0819C9.7619 15.842 9.5 16.1041 9.5 16.4244V19.9178C9.5 20.238 9.7619 20.5 10.0819 20.5ZM9.5 10.6019V14.0953C9.5 14.4156 9.7619 14.6776 10.0819 14.6776H13.5735C13.8936 14.6776 14.1555 14.4156 14.1555 14.0953V10.6019C14.1555 10.2816 13.8936 10.0197 13.5735 10.0197H10.0819C9.7619 10.0197 9.5 10.2816 9.5 10.6019ZM17.0361 9.67029L14.5628 12.139C14.5089 12.1929 14.4661 12.2569 14.4369 12.3273C14.4077 12.3977 14.3927 12.4733 14.3927 12.5495C14.3927 12.6258 14.4077 12.7013 14.4369 12.7717C14.4661 12.8422 14.5089 12.9061 14.5628 12.96L17.0361 15.4345C17.263 15.6616 17.6296 15.6616 17.8566 15.4345L20.3298 12.96C20.3838 12.9061 20.4266 12.8422 20.4558 12.7717C20.485 12.7013 20.5 12.6258 20.5 12.5495C20.5 12.4733 20.485 12.3977 20.4558 12.3273C20.4266 12.2569 20.3838 12.1929 20.3298 12.139L17.8624 9.67029C17.6355 9.44324 17.263 9.44324 17.0361 9.67029Z"},
 {class1: "item", class2: "item-btn N", text: "Community", svg: "M12.25 12.7501C12.7473 12.7501 13.2242 12.5525 13.5758 12.2009C13.9275 11.8493 14.125 11.3723 14.125 10.875C14.125 10.3778 13.9275 9.90083 13.5758 9.54919C13.2242 9.19755 12.7473 9 12.25 9C11.7527 9 11.2758 9.19755 10.9242 9.54919C10.5725 9.90083 10.375 10.3778 10.375 10.875C10.375 11.3723 10.5725 11.8493 10.9242 12.2009C11.2758 12.5525 11.7527 12.7501 12.25 12.7501ZM9 14.4911C9 13.9436 9.4435 13.5001 9.991 13.5001H12.791C12.5719 14.053 12.5681 14.6679 12.7805 15.2234C12.9929 15.7789 13.4059 16.2345 13.938 16.5002H12.7415C12.446 16.5002 12.1572 16.588 11.9117 16.7524C11.6662 16.9168 11.475 17.1505 11.3625 17.4237C10.36 17.2382 9.759 16.7377 9.4155 16.1787C9 15.5052 9 14.8091 9 14.6891V14.4911ZM16.0615 16.5002H17.259C17.8815 16.5002 18.415 16.8817 18.638 17.4237C19.6405 17.2382 20.2415 16.7377 20.585 16.1787C21 15.5047 21 14.8086 21 14.6886V14.4911C21 14.2283 20.8956 13.9762 20.7097 13.7904C20.5239 13.6045 20.2718 13.5001 20.009 13.5001H17.209C17.4281 14.053 17.4319 14.6679 17.2195 15.2234C17.0071 15.7789 16.5936 16.2345 16.0615 16.5002ZM19.625 10.875C19.625 11.3723 19.4275 11.8493 19.0758 12.2009C18.7242 12.5525 18.2473 12.7501 17.75 12.7501C17.2527 12.7501 16.7758 12.5525 16.4242 12.2009C16.0725 11.8493 15.875 11.3723 15.875 10.875C15.875 10.3778 16.0725 9.90083 16.4242 9.54919C16.7758 9.19755 17.2527 9 17.75 9C18.2473 9 18.7242 9.19755 19.0758 9.54919C19.4275 9.90083 19.625 10.3778 19.625 10.875ZM11.75 17.9912C11.75 17.4437 12.1935 17.0002 12.741 17.0002H17.259C17.8065 17.0002 18.25 17.4437 18.25 17.9912V18.1887C18.25 18.3087 18.25 19.0047 17.835 19.6787C17.4 20.3868 16.553 21.0003 15 21.0003C13.447 21.0003 12.6 20.3863 12.165 19.6792C11.75 19.0047 11.75 18.3092 11.75 18.1887V17.9912ZM15 16.2502C15.4973 16.2502 15.9742 16.0526 16.3258 15.701C16.6775 15.3493 16.875 14.8724 16.875 14.3751C16.875 13.8778 16.6775 13.4009 16.3258 13.0493C15.9742 12.6976 15.4973 12.5001 15 12.5001C14.5027 12.5001 14.0258 12.6976 13.6742 13.0493C13.3225 13.4009 13.125 13.8778 13.125 14.3751C13.125 14.8724 13.3225 15.3493 13.6742 15.701C14.0258 16.0526 14.5027 16.2502 15 16.2502Z"},
 {class1: "item", class2: "item-btn N", text: "Email", svg: "M19.8 10H10.2C9.54 10 9.006 10.5625 9.006 11.25L9 18.7501C9 19.4376 9.54 20 10.2 20H19.8C20.46 20 21 19.4376 21 18.7501V11.25C21 10.5625 20.46 10 19.8 10ZM19.56 12.6563L15.318 15.4188C15.126 15.5438 14.874 15.5438 14.682 15.4188L10.44 12.6563C10.3798 12.6212 10.3272 12.5736 10.2851 12.5166C10.2431 12.4596 10.2126 12.3942 10.1955 12.3247C10.1785 12.255 10.1751 12.1825 10.1857 12.1115C10.1963 12.0405 10.2206 11.9725 10.2572 11.9115C10.2937 11.8505 10.3418 11.798 10.3984 11.7569C10.4551 11.7159 10.5191 11.6873 10.5867 11.6727C10.6543 11.6582 10.724 11.6581 10.7916 11.6725C10.8592 11.6869 10.9233 11.7154 10.98 11.7563L15 14.375L19.02 11.7563C19.0767 11.7154 19.1408 11.6869 19.2084 11.6725C19.276 11.6581 19.3457 11.6582 19.4133 11.6727C19.4809 11.6873 19.5449 11.7159 19.6016 11.7569C19.6582 11.798 19.7063 11.8505 19.7428 11.9115C19.7794 11.9725 19.8037 12.0405 19.8143 12.1115C19.8249 12.1825 19.8215 12.255 19.8045 12.3247C19.7874 12.3942 19.7569 12.4596 19.7149 12.5166C19.6728 12.5736 19.6202 12.6212 19.56 12.6563Z"},
 {class1: "item", class2: "item-btn N", text: "Share", svg: "M20.6747 9.13132C20.9114 9.29534 21.0356 9.57887 20.9911 9.86241L19.4911 19.6104C19.4559 19.8377 19.3176 20.0369 19.116 20.1493C18.9145 20.2618 18.6731 20.2759 18.4598 20.1869L15.6566 19.0222L14.0511 20.7586C13.8426 20.9859 13.5144 21.0609 13.2261 20.9484C12.9379 20.8359 12.7503 20.557 12.7503 20.2477V18.2888C12.7503 18.1951 12.7855 18.106 12.8487 18.0357L16.7769 13.7522C16.9129 13.6046 16.9082 13.3773 16.7676 13.2367C16.6269 13.0961 16.3995 13.0867 16.2519 13.2203L11.4847 17.4546L9.41511 16.4188C9.16671 16.2947 9.00733 16.0462 9.00024 15.7698C8.99324 15.4933 9.13857 15.2356 9.37759 15.0973L19.8778 9.09851C20.1286 8.95557 20.438 8.96963 20.6747 9.13132Z"}

];

const footers = [

 {class1: "item", class2: "item-btn N", text: "Settings", svg: "M20.4695 12.9055C20.5424 13.1094 20.4809 13.3368 20.3236 13.4822L19.3366 14.4058C19.3617 14.6003 19.3754 14.7996 19.3754 15.0012C19.3754 15.2027 19.3617 15.402 19.3366 15.5966L20.3236 16.5202C20.4809 16.6656 20.5424 16.893 20.4695 17.0969C20.3692 17.3759 20.2484 17.6431 20.1094 17.901L20.0022 18.0908C19.8518 18.3487 19.6831 18.5925 19.4985 18.8222C19.364 18.991 19.1406 19.0473 18.94 18.9816L17.6704 18.5668C17.3649 18.8081 17.0276 19.0098 16.6674 19.1622L16.3825 20.5007C16.3369 20.714 16.1773 20.8828 15.9676 20.9179C15.6531 20.9718 15.3294 21 14.9989 21C14.6683 21 14.3447 20.9718 14.0301 20.9179C13.8204 20.8828 13.6608 20.714 13.6152 20.5007L13.3303 19.1622C12.9702 19.0098 12.6328 18.8081 12.3274 18.5668L11.06 18.984C10.8594 19.0496 10.636 18.991 10.5015 18.8246C10.3169 18.5948 10.1482 18.351 9.9978 18.0932L9.8906 17.9033C9.7516 17.6454 9.6308 17.3782 9.5305 17.0993C9.45755 16.8952 9.5191 16.6679 9.6764 16.5226L10.6634 15.599C10.6383 15.402 10.6246 15.2027 10.6246 15.0012C10.6246 14.7996 10.6383 14.6003 10.6634 14.4058L9.6764 13.4822C9.5191 13.3368 9.45755 13.1094 9.5305 12.9055C9.6308 12.6265 9.7516 12.3593 9.8906 12.1014L9.9978 11.9115C10.1482 11.6536 10.3169 11.4099 10.5015 11.1802C10.636 11.0113 10.8594 10.955 11.06 11.0208L12.3296 11.4356C12.6351 11.1941 12.9724 10.9926 13.3326 10.8402L13.6175 9.50164C13.6631 9.28836 13.8227 9.1196 14.0324 9.08443C14.3469 9.02818 14.6706 9 15.0011 9C15.3317 9 15.6553 9.02818 15.9699 9.08206C16.1796 9.11723 16.3392 9.28599 16.3848 9.49928L16.6697 10.8378C17.0298 10.9902 17.3672 11.1919 17.6726 11.4332L18.9423 11.0184C19.1429 10.9527 19.3663 11.0113 19.5007 11.1778C19.6854 11.4075 19.8541 11.6513 20.0045 11.9092L20.1116 12.099C20.2507 12.3569 20.3715 12.6241 20.4718 12.9031L20.4695 12.9055ZM15.0011 16.8765C15.4848 16.8765 15.9486 16.679 16.2906 16.3273C16.6326 15.9756 16.8247 15.4985 16.8247 15.0012C16.8247 14.5038 16.6326 14.0268 16.2906 13.6751C15.9486 13.3234 15.4848 13.1258 15.0011 13.1258C14.5175 13.1258 14.0537 13.3234 13.7117 13.6751C13.3697 14.0268 13.1776 14.5038 13.1776 15.0012C13.1776 15.4985 13.3697 15.9756 13.7117 16.3273C14.0537 16.679 14.5175 16.8765 15.0011 16.8765Z"},
 {class1: "item", class2: "item-btn N", text: "Support", svg: "M15 21C18.3137 21 21 18.3137 21 15C21 11.6863 18.3137 9 15 9C11.6863 9 9 11.6863 9 15C9 18.3137 11.6863 21 15 21ZM13.0928 12.4474C12.8907 12.7505 13.0339 13.1674 13.3707 13.3105C13.6276 13.4158 13.9349 13.34 14.0823 13.1C14.2802 12.7926 14.6002 12.5358 15.0928 12.5358C16.1791 12.5358 16.3939 13.5505 16.0107 14.0937C15.8496 14.3241 15.6368 14.5204 15.4217 14.7188C15.1533 14.9663 14.8812 15.2173 14.7012 15.5421C14.5833 15.7526 14.5328 15.9758 14.5076 16.1905C14.4655 16.5569 14.7644 16.8726 15.1307 16.8726C15.4423 16.8726 15.6949 16.6326 15.7328 16.3253C15.7581 16.1358 15.796 16.0432 15.8591 15.9295C15.9858 15.6967 16.1649 15.5233 16.3735 15.3214C16.5949 15.1071 16.8495 14.8606 17.1097 14.4769C17.5644 13.8032 17.3918 12.8979 17.097 12.4137C16.7518 11.8495 16.0739 11.399 15.0844 11.399C14.1833 11.399 13.5012 11.8411 13.0928 12.4474ZM15.0886 19.399C15.5518 19.399 15.9307 19.02 15.9307 18.5569C15.9307 18.0937 15.5518 17.7147 15.0886 17.7147C14.6255 17.7147 14.2465 18.0937 14.2465 18.5569C14.2465 19.02 14.6255 19.399 15.0886 19.399Z"},
 {class1: "item", class2: "item-btn N", text: "Log Out", svg: "M13.0488 9C14.6843 9 15.503 9.00088 16.0107 9.52832C16.5184 10.0551 16.5186 10.904 16.5186 12.5996C16.5186 13.0205 16.5185 13.232 16.4209 13.3838C16.379 13.449 16.3244 13.5051 16.2617 13.5488C16.1155 13.6495 15.9123 13.6504 15.5068 13.6504H13.0479C12.7029 13.6505 12.3719 13.7929 12.1279 14.0459C11.8842 14.299 11.7471 14.6422 11.7471 15C11.7471 15.3578 11.8842 15.7009 12.1279 15.9541C12.3719 16.2071 12.7029 16.3495 13.0479 16.3496H15.5068C15.912 16.3496 16.1155 16.3502 16.2617 16.4512C16.3244 16.4947 16.3789 16.5512 16.4209 16.6162C16.5185 16.7681 16.5186 16.9796 16.5186 17.4004C16.5186 19.096 16.5184 19.9448 16.0107 20.4717C15.503 20.999 14.684 21 13.0479 21H12.4697C10.8344 21 10.0171 20.999 9.50879 20.4717C9.00064 19.9449 9 19.0966 9 17.4004V12.5996C9 10.9034 9.00063 10.055 9.50879 9.52832C10.0171 9.00089 10.8342 9 12.4707 9H13.0488ZM18.5078 12.752C18.6225 12.7428 18.7369 12.7817 18.8242 12.8594L20.8477 14.6582C20.8952 14.7004 20.9338 14.7535 20.96 14.8125C20.9862 14.8715 21 14.936 21 15.001C21 15.066 20.9861 15.1305 20.96 15.1895C20.9338 15.2484 20.8952 15.3006 20.8477 15.3428L18.8242 17.1426C18.7811 17.1809 18.7307 17.2102 18.6768 17.2285C18.6226 17.2469 18.5646 17.2536 18.5078 17.249C18.4514 17.2444 18.3962 17.2287 18.3457 17.2021C18.2949 17.1754 18.249 17.1377 18.2119 17.0928C18.1751 17.048 18.1465 16.9962 18.1289 16.9404C18.1113 16.8843 18.105 16.8245 18.1094 16.7656C18.1138 16.7069 18.1294 16.6492 18.1553 16.5967C18.1811 16.5441 18.2166 16.4974 18.2598 16.459L19.3936 15.4512H13.0469C12.932 15.4511 12.8215 15.4037 12.7402 15.3193C12.659 15.235 12.6133 15.1203 12.6133 15.001C12.6133 14.8817 12.659 14.767 12.7402 14.6826C12.8215 14.5984 12.932 14.5509 13.0469 14.5508H19.3926L18.2598 13.543C18.1725 13.4655 18.1184 13.3552 18.1094 13.2363C18.1005 13.1174 18.1372 12.9989 18.2119 12.9082C18.2866 12.8177 18.3933 12.7612 18.5078 12.752Z"}

];


items.forEach(item => {

  SideNavbar.querySelector(".item-list").innerHTML += `

   <li class="${item.class1}">

    <div class="${item.class2}">

     <div class="indicator"></div>

      <svg class="icon" width="30" height="30" viewBox="0 0 30 30" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd" d="${item.svg}"/>
      </svg>

      <span class="Text">${item.text}</span>

     </section>

     </div>

   </li>

  `;

});

footers.forEach(item => {

    SideNavbar.querySelector("footer").innerHTML += `

   <li class="${item.class1}">

    <div class="${item.class2}">

     <div class="indicator"></div>

      <svg class="icon" width="30" height="30" viewBox="0 0 30 30" fill="none">
       <path fill-rule="evenodd" clip-rule="evenodd" d="${item.svg}"/>
      </svg>

      <span class="Text">${item.text}</span>

     </div>

   </li>

  `;

});


const ItemBtns = document.querySelectorAll(".item-btn.N");
const ItemMenus = document.querySelectorAll(".item.menu");

ItemMenus.forEach(ItemMenu => {

    ItemMenu.querySelector(".item-btn").innerHTML += `

    <svg class="arrow" width="30" height="30" viewBox="0 0 30 30" fill="none">
     <path d="M15 17.5C14.8511 17.4993 14.7043 17.467 14.5701 17.4055C14.4359 17.344 14.3178 17.2548 14.2243 17.1444L11.769 14.3111C11.6255 14.1406 11.5352 13.935 11.5084 13.7179C11.4816 13.5009 11.5194 13.2809 11.6173 13.0833C11.6968 12.9116 11.8265 12.7652 11.9909 12.6618C12.1554 12.5584 12.3476 12.5022 12.5447 12.5H17.4553C17.6524 12.5022 17.8446 12.5584 18.0091 12.6618C18.1735 12.7652 18.3032 12.9116 18.3827 13.0833C18.4807 13.2809 18.5184 13.5009 18.4916 13.7179C18.4648 13.935 18.3745 14.1406 18.231 14.3111L15.7757 17.1444C15.6822 17.2548 15.5641 17.344 15.4299 17.4055C15.2957 17.467 15.1489 17.4993 15 17.5Z"/>
    </svg>

  `;

});


// Create Submenus

menuItems = [
  
 ["Recent", "Adobe XD", "Figma", "Sketch"],
 ["Frames", "Icons", "Pallets", "Vectors"]

]

ItemMenus.forEach((ItemMenu,index) => {

    ItemMenu.innerHTML += `

   <section class="menu-container">

   <div class="menu-content">

    <ul class="menu-list">
    
      <div class="line"></div>
    
    </ul>

   </section>

  `;

   const MenuLists = ItemMenu.querySelectorAll(".menu-list");

    // Get the array corresponding to this ItemMenu
    const Items = menuItems[index];

    MenuLists.forEach(MenuList => {

     Items.forEach(item => {

        MenuList.innerHTML += `

          <li class="menu-item">
  
              <span>${item}</span>
   
          </li>
        
        `;

     });

    });

});


const MenuItemAs = document.querySelectorAll(".menu-container .menu-item");

const Ham = document.querySelector(".Ham");
const Cross = document.querySelector(".Cross");
const AccountSettings = document.querySelector(".account-settings");


// Create Fields of Account Settings

const fields = [

 {title: "User Name", class: "username", type: "text"},
 {title: "Email", class: "email", type: "email"},
 {title: "Phone Number", class: "phone", type: "tel"}

];

fields.forEach(field => {

  AccountSettings.querySelector(".fields").innerHTML += `

    <li>

     <section>

      <span>${field.title}</span>

      <input class="input ${field.class}" type="${field.type}">

      <div class="Line"></div>
      <div class="line"></div>

      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M28.2435 28.2969L27.4297 31.5747C27.3547 31.8766 27.0586 32.0549 26.7567 31.9799L23.4789 31.1661C23.3388 31.1313 23.212 31.0426 23.1417 30.9107L14.2882 16.2239L19.3354 13.1844L28.1782 27.8686C28.2592 28.0031 28.281 28.1459 28.2435 28.2969ZM11.9377 12.3207C11.8625 12.1961 11.8126 12.0579 11.7909 11.9141C11.7692 11.7702 11.7761 11.6234 11.8111 11.4822C11.8462 11.341 11.9088 11.2081 11.9952 11.0911C12.0817 10.9741 12.1905 10.8753 12.3152 10.8004L15.4647 8.90377C15.5892 8.82858 15.7274 8.7787 15.8713 8.75698C16.0151 8.73526 16.1619 8.74212 16.3031 8.77719C16.4443 8.81225 16.5772 8.87481 16.6942 8.96131C16.8112 9.0478 16.91 9.15652 16.985 9.28124L18.4682 11.7443L13.421 14.7837L11.9377 12.3207Z"/>
      </svg>

     </section>

   </li>

  `;

});


const BackAS = document.querySelector(".Back");
const Settings = document.querySelector(".account .settings");
const Texts = document.querySelectorAll(".item .text");
const Items = document.querySelectorAll(".item-btn");
const Search = document.querySelector(".side-navbar .input");
const Save = document.querySelector(".account-settings .save");
const CamerInput = document.querySelector("#CamerInput");
const Sections = document.querySelectorAll(".account-settings .fields section");


//Check if the user uses touchscreen or not

function Resize() {

if ("ontouchstart" in document.documentElement){
  
  Body.classList.replace("mouse","touch");

}else {
  
  Body.classList.replace("touch","mouse");

}

}

Resize();

window.addEventListener("resize", Resize);


//Activate & Deactivate Side Navbar
Ham.addEventListener("click",() => {

SideNavbar.classList.add("active");
Body.style.overflowY = "auto";
SideNavbar.style.left="0";

Frames.forEach(Frame => {
Frame.style.filter="brightness(70%)";});

ItemMenus.forEach(ItemMenu => {
ItemMenu.querySelector(".item-btn").classList.remove("active");
ItemMenu.classList.remove("active");});

});

Cross.addEventListener("click",deactivate);

function deactivate() {

SideNavbar.classList.remove("active");
Body.style.overflowY = "hidden";
SideNavbar.style.left="-220px";

ItemMenus.forEach(ItemMenu => {
ItemMenu.querySelector(".item-btn").classList.remove("active");
ItemMenu.classList.remove("active");});

Frames.forEach(Frame => {
Frame.style.filter="brightness(100%)";});

MenuItemAs.forEach(MenuItem => {
MenuItem.classList.remove("active");});

}


Frames.forEach(Frame => {
Frame.addEventListener("click",() => {

deactivate();

});
});


//Click on each item-btn
ItemBtns.forEach((ItemBtn,index) => {
ItemBtn.addEventListener("click",() => {

ItemBtns.forEach(ItemBtn => {
ItemBtn.classList.remove("active");});

Frames.forEach(Frame => {
Frame.classList.remove("active");});

Frames[index].classList.add("active");

ItemMenus.forEach(ItemMenu => {
ItemMenu.querySelector(".item-btn").classList.remove("active");
ItemMenu.classList.remove("active");});

ItemBtn.classList.add("active");

setTimeout(() => {deactivate();},400);

});});


// Click on each item-menu (with submenus)
ItemMenus.forEach(ItemMenu => {
const Btn = ItemMenu.querySelector(".item-btn");

Btn.addEventListener("click", () => {
const isAlreadyActive = ItemMenu.classList.contains("active");

// Deactivate all others first
ItemMenus.forEach(ItemMenu => {
ItemMenu.classList.remove("active");
ItemMenu.querySelector(".item-btn").classList.remove("active");
});

// Only activate if it wasn't already active
if (!isAlreadyActive) {


ItemMenu.classList.add("active");
Btn.classList.add("active");}

else {
ItemMenu.querySelector(".item-btn").classList.remove("active");

}

});
});


// Click on each menu-item of submenus
MenuItemAs.forEach((MenuItem,index) => {
MenuItem.addEventListener("click",() => {

MenuItem.classList.add("active");
setTimeout(() => {FrameSs[index].classList.add("active");
Frames.forEach(Frame => {Frame.style.overflowY="hidden";});
},300);
setTimeout(() => {deactivate();},800);

});
});


//Click on back btns
Backs.forEach(Back => {
Back.addEventListener("click",() => {

FrameSs.forEach(FrameS => {
FrameS.classList.remove("active");});

Frames.forEach(Frame => {
Frame.style.overflowY="auto";
Frame.style.filter="brightness(100%)";});

});
});


//Open Account Settings
Settings.addEventListener("click",() => {

Settings.querySelector(".circle").classList.add("active");

setTimeout(() => {
Settings.querySelector(".circle").classList.remove("active");
AccountSettings.classList.add("active");
Frames.forEach(Frame => {Frame.style.overflowY="hidden";});
},500);
setTimeout(() => {deactivate();},800);

});


//Close Account Settings
BackAS.addEventListener("click",() => {

profileEditImg.src = originalImg;
usernameInput.value = originalUsername;
emailInput.value = originalEmail;
phoneInput.value = originalPhone;

AccountSettings.classList.remove("active");
setTimeout(() => {AccountSettings.scrollTop = 0;},400);
});

Sections.forEach(Section => {

Section.querySelector("input").addEventListener("focus",() => {
Section.classList.add("active");
});

Section.querySelector("input").addEventListener("blur",() => {
Section.classList.remove("active");
});

});

// Edit Account Details 
let originalImg = document.querySelector(".account-settings img").src;
let originalUsername = "Daniel Parker";
let originalEmail = "danielparker@gmail.com";
let originalPhone = "+44 201 234 5678";

document.querySelector(".account .container img").src = originalImg;
document.querySelector(".account-info h3").innerHTML = originalUsername;
document.querySelector(".account-info span").innerHTML = originalEmail;

// Set inputs with current values
const profileEditImg = document.querySelector(".account-settings img");
const usernameInput = document.querySelector(".account-settings .username");
const emailInput = document.querySelector(".account-settings .email");
const phoneInput = document.querySelector(".account-settings .phone");

profileEditImg.src = originalImg;
usernameInput.value = originalUsername;
emailInput.value = originalEmail;
phoneInput.value = originalPhone;

// Check for changes
function checkForChanges() {
  
  const imgChanged = profileEditImg.src !== originalImg;
  const usernameChanged = usernameInput.value !== originalUsername;
  const emailChanged = emailInput.value !== originalEmail;
  const phoneChanged = phoneInput.value !== originalPhone;
  
  const allFieldsFilled =
    usernameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    phoneInput.value.trim() !== "";

  if (allFieldsFilled && (imgChanged || usernameChanged || emailChanged || phoneChanged)) {
    Save.classList.add("active");
  } else {
    Save.classList.remove("active");
  }
}

// Listen to input changes
usernameInput.addEventListener("input", checkForChanges);
emailInput.addEventListener("input", checkForChanges);
phoneInput.addEventListener("input", checkForChanges);
profileEditImg.addEventListener("load", checkForChanges); // triggers when image changes

// Handle camera upload
document.querySelector(".account-settings .camera").addEventListener("click", () => {
  CameraInput.value = "";
  CameraInput.click();
});

CameraInput.addEventListener("change", () => {
  const file = CameraInput.files[0];
  if (file) {
    const currentCamera = URL.createObjectURL(file);
    profileEditImg.src = currentCamera; // triggers 'load' → checkForChanges()
  }
});

// Handle Save
Save.addEventListener("click", () => {

  // Apply updates
  document.querySelector(".account .container img").src = profileEditImg.src;
  document.querySelector(".account-info h3").innerHTML = usernameInput.value;
  document.querySelector(".account-info span").innerHTML = emailInput.value;
  
  // Reset originals
  originalImg = profileEditImg.src;
  originalUsername = usernameInput.value;
  originalEmail = emailInput.value;
  originalPhone = phoneInput.value;
  
setTimeout(() => {
Save.classList.remove("active");
AccountSettings.classList.remove("active");
setTimeout(() => {AccountSettings.scrollTop = 0;},400);
Frames.forEach(Frame => {Frame.style.overflowY="auto";});
},500);

});


// Dragging Side Navbar
let isDragging = false;
let startX = 0;
let startY = 0;
let startLeft = 0;
let isVerticalScroll = false;

// Begin drag (mouse or touch)
function startDrag(clientX, clientY) {
  SideNavbar.style.transition = "none";
  isDragging = true;
  isVerticalScroll = false;
  startX = clientX;
  startY = clientY;
  startLeft = parseInt(SideNavbar.style.left) || 0;
  SideNavbar.style.cursor = "grab";
}

// While dragging
function dragMove(clientX, clientY) {
  if (!isDragging) return;
  SideNavbar.style.cursor = "grabbing";
  
  const dx = clientX - startX;
  const dy = clientY - startY;

  const newLeft = startLeft + dx;

  if (newLeft > 0) return;

  SideNavbar.style.left = `${newLeft}px`;

  Frames.forEach(Frame => {
    Frame.style.filter = `brightness(${(0.7 + 0.3 * (Math.abs(newLeft) / 220)) * 100}%)`;
  });
}

// End drag
function endDrag() {
  if (!isDragging) return;
  isDragging = false;
  SideNavbar.style.cursor = "grab";
  SideNavbar.style.transition = "0.4s";

  const finalLeft = parseInt(SideNavbar.style.left) || 0;

  if (finalLeft < -110) {
    deactivate();
  
  } else {
  
    SideNavbar.classList.add("active");
    Body.style.overflowY = "auto";
    SideNavbar.style.left="0";

  }

    Frames.forEach(Frame => {
      Frame.style.filter = "brightness(70%)";
    });
  }


// Mouse events
SideNavbar.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
document.addEventListener("mousemove", (e) => dragMove(e.clientX, e.clientY));
document.addEventListener("mouseup", endDrag);

// Touch events
SideNavbar.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
document.addEventListener("touchmove", (e) => dragMove(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
document.addEventListener("touchend", endDrag);