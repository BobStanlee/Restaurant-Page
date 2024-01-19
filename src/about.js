// function to populate the About page
const populateAbout = () => {
    let content = document.getElementById("content");
  
    // assign About document structure to home
    let about = `<div class="pt-20 lg:pt-40 px-5 bg-BackgroundWhite"><!-- About Section -->
    <div class="flex flex-wrap item-center justify-center mb-10 items-center lg:grid lg:grid-cols-2 lg:gap-x-40"><!--  -->
        <h2 class="font-bold text-5xl text-center mt-5 mb-5">Best <span class="text-primaryred">Delivered</span> Categories</h2>
        <p class="text-gray-500 text-base">
            Here Are Some Of Our Dest Distributed Categories. If You Want You Can Order From Here.
        </p>
    </div>

    <div class="flex flex-wrap gap-5 items-center justify-center mb-10">
        <div class="w-60 clear-start flex flex-col"><!-- Card Categories -->
            <img src="./img/2.png" alt="" class="mb-5">

            <h3 class="font-bold text-xl text-center mb-5">Chicken Burger</h3>
            <button class="flex font-medium items-center justify-center text-sm text-primaryred">
                Order Now
                <span class="material-symbols-outlined">
                    chevron_right
                </span>
            </button>
        </div>

        <div class="w-60 clear-start flex flex-col"><!-- Card Categories -->
            <img src="./img/1.png" alt="" class="mb-5">

            <h3 class="font-bold text-xl text-center mb-5">Chicken Burger</h3>
            <button class="flex font-medium items-center justify-center text-sm text-primaryred">
                Order Now
                <span class="material-symbols-outlined">
                    chevron_right
                </span>
            </button>
        </div>

        <div class="w-60 clear-start flex flex-col"><!-- Card Categories -->
            <img src="./img/3.png" alt="" class="mb-5">

            <h3 class="font-bold text-xl text-center mb-5">Chicken Burger</h3>
            <button class="flex font-medium items-center justify-center text-sm text-primaryred">
                Order Now
                <span class="material-symbols-outlined">
                    chevron_right
                </span>
            </button>
        </div>
    </div>
</div>`

    // Populate home document structure in content
    content.innerHTML = about;
}

export default populateAbout;