// function to populate the Menu page
const populateMenu = () => {
    let content = document.getElementById("content");

    // assign Menu document structure to home
    let menu = `<div class="pt-20 px-20 pb-20 bg-BackgroundWhite lg:pt-40"><!-- Menu -->
    <div class="flex flex-col gap-5 pb-10 mb-20 md:flex-row md:justify-between">
        <div class="grid gap-4">
            <h1 class="font-black text-5xl">
                Our <span class="text-primaryred">Regular</span> Menu
            </h1>
            <p class="text-gray-500">
                These Are Our Regular Menus. You Can Order Anything You Like.
            </p>
        </div>
        
        <button class="self-center px-5 py-2 text-white shadow-md rounded-full bg-primaryred"><!-- See All -->
            See All
        </button>
    </div>

    <div class="flex flex-wrap gap-y-40 justify-center items-center md:gap-y-40 md:gap-x-5"><!-- Menu Container -->
        <div class="max-w-60 bg-backgroundPrimary rounded-2xl px-5 pb-5 hover:shadow-lg hover:scale-110 transition-all"><!-- Menu Card -->
           
            <img src="./img/chickenburder.jpg" alt="" class="rounded-full relative -top-20"><!-- Pic Frame -->

            <h2 class="font-black text-xl text-gray-800 mb-2">Chicken Burger</h2>

            <div class="flex items-center mb-5"><!-- Rating -->
                <div class="flex gap-1 items-center">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                </div>

                <span class="text-gray-500 ml-2 text-sm">(160)</span>
            </div>

            <div class="flex gap-5"><!-- Price and Buy Button -->
                <span class="font-bold text-2xl text-gray-800"><!-- Price -->
                    $3.50
                </span>

                <button class="px-5 py-2 text-white rounded-full bg-primaryred">
                    Buy Now
                </button>
            </div>
        </div>

        <div class="max-w-60 bg-backgroundPrimary rounded-2xl px-5 pb-5 hover:shadow-lg hover:scale-110 transition-all"><!-- Menu Card -->
           
            <img src="./img/chickenburder.jpg" alt="" class="rounded-full relative -top-20"><!-- Pic Frame -->

            <h2 class="font-black text-xl text-gray-800 mb-2">Chicken Burger</h2>

            <div class="flex items-center mb-5"><!-- Rating -->
                <div class="flex gap-1 items-center">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                </div>

                <span class="text-gray-500 ml-2 text-sm">(160)</span>
            </div>

            <div class="flex gap-5"><!-- Price and Buy Button -->
                <span class="font-bold text-2xl text-gray-800"><!-- Price -->
                    $3.50
                </span>

                <button class="px-5 py-2 text-white rounded-full bg-primaryred">
                    Buy Now
                </button>
            </div>
        </div>

        <div class="max-w-60 bg-backgroundPrimary rounded-2xl px-5 pb-5 hover:shadow-lg hover:scale-110 transition-all"><!-- Menu Card -->
           
            <img src="./img/chickenburder.jpg" alt="" class="rounded-full relative -top-20"><!-- Pic Frame -->

            <h2 class="font-black text-xl text-gray-800 mb-2">Chicken Burger</h2>

            <div class="flex items-center mb-5"><!-- Rating -->
                <div class="flex gap-1 items-center">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                </div>

                <span class="text-gray-500 ml-2 text-sm">(160)</span>
            </div>

            <div class="flex gap-5"><!-- Price and Buy Button -->
                <span class="font-bold text-2xl text-gray-800"><!-- Price -->
                    $3.50
                </span>

                <button class="px-5 py-2 text-white rounded-full bg-primaryred">
                    Buy Now
                </button>
            </div>
        </div>

        <div class="max-w-60 bg-backgroundPrimary rounded-2xl px-5 pb-5 hover:shadow-lg hover:scale-110 transition-all"><!-- Menu Card -->
           
            <img src="./img/chickenburder.jpg" alt="" class="rounded-full relative -top-20"><!-- Pic Frame -->

            <h2 class="font-black text-xl text-gray-800 mb-2">Chicken Burger</h2>

            <div class="flex items-center mb-5"><!-- Rating -->
                <div class="flex gap-1 items-center">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                </div>

                <span class="text-gray-500 ml-2 text-sm">(160)</span>
            </div>

            <div class="flex gap-5"><!-- Price and Buy Button -->
                <span class="font-bold text-2xl text-gray-800"><!-- Price -->
                    $3.50
                </span>

                <button class="px-5 py-2 text-white rounded-full bg-primaryred">
                    Buy Now
                </button>
            </div>
        </div>

        <div class="max-w-60 bg-backgroundPrimary rounded-2xl px-5 pb-5 hover:shadow-lg hover:scale-110 transition-all"><!-- Menu Card -->
           
            <img src="./img/chickenburder.jpg" alt="" class="rounded-full relative -top-20"><!-- Pic Frame -->

            <h2 class="font-black text-xl text-gray-800 mb-2">Chicken Burger</h2>

            <div class="flex items-center mb-5"><!-- Rating -->
                <div class="flex gap-1 items-center">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                </div>

                <span class="text-gray-500 ml-2 text-sm">(160)</span>
            </div>

            <div class="flex gap-5"><!-- Price and Buy Button -->
                <span class="font-bold text-2xl text-gray-800"><!-- Price -->
                    $3.50
                </span>

                <button class="px-5 py-2 text-white rounded-full bg-primaryred">
                    Buy Now
                </button>
            </div>
        </div>

        <div class="max-w-60 bg-backgroundPrimary rounded-2xl px-5 pb-5 hover:shadow-lg hover:scale-110 transition-all"><!-- Menu Card -->
           
            <img src="./img/chickenburder.jpg" alt="" class="rounded-full relative -top-20"><!-- Pic Frame -->

            <h2 class="font-black text-xl text-gray-800 mb-2">Chicken Burger</h2>

            <div class="flex items-center mb-5"><!-- Rating -->
                <div class="flex gap-1 items-center">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                    <img src="./img/star.png" alt="" class="w-3 h-3">
                </div>

                <span class="text-gray-500 ml-2 text-sm">(160)</span>
            </div>

            <div class="flex gap-5"><!-- Price and Buy Button -->
                <span class="font-bold text-2xl text-gray-800"><!-- Price -->
                    $3.50
                </span>

                <button class="px-5 py-2 text-white rounded-full bg-primaryred">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
</div>`


 // Populate home document structure in content
 content.innerHTML = menu;
}

export default populateMenu;