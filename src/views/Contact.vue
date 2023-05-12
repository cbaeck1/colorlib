<template>
  <div>
    <section class="bg-title-page p-t-50 p-b-40 flex-col-c-m" :style="'background-image: url(https://picsum.photos/1920/239/?image=528);'">
      <h2 class="l-text2 t-center">
        CONTACT
      </h2>
    </section>

    <section class="bgwhite p-t-55 p-b-65">
      <div class="container">
        <div class="row">
          <div class="col-md-4 p-b-30">
            <div class="hov-img-zoom">
              <img src="https://picsum.photos/300/400/?image=528">
            </div>
          </div>

          <div class="col-md-6 p-b-30">
            <form class="leave-comment">
              <h4 class="m-text26 p-b-36 p-t-15">
              Send us your message
              </h4>
              <div class="bo4 of-hidden size15 m-b-20">
              <input class="sizefull s-text7 p-l-22 p-r-22" type="text" name="name" placeholder="Full Name">
              </div>
              <div class="bo4 of-hidden size15 m-b-20">
              <input class="sizefull s-text7 p-l-22 p-r-22" type="text" name="phone-number" placeholder="Phone Number">
              </div>
              <div class="bo4 of-hidden size15 m-b-20">
              <input class="sizefull s-text7 p-l-22 p-r-22" type="text" name="email" placeholder="Email Address">
              </div>
              <textarea class="dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20" name="message" placeholder="Message"></textarea>
              <div class="w-size25">
              <button class="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4">
                Send
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  
  export default {

  }
</script>