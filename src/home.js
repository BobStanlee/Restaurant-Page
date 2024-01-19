// function to populate the home page
const populateHome = () => {
  let content = document.getElementById("content");

  // assign home document structure to home
  let home = `<div><!-- Home Screen -->
    <div id="hero" class="flex flex-col pt-20 xr:h-screen bg-backgroundPrimary lg:grid grid-cols-2 lg:items-center lg:justify-center px-20">
        <div class="flex flex-col items-center justify-center p-5 lg:grid lg:gap-10"><!-- Left Content -->
            <h2 class="font-black text-5xl/snug text-primaryred mb-10">All Fast Food Is Available at Stadle</h2>

            <img src="./img/Herofood.png" alt="" class="mb-10 lg:hidden">


            <div class="flex gap-5 justify-center items-center mb-20"><!-- Just a click away container -->
                <img src="./img/Profile1.png" alt="profile" class="w-14 h-14">
                <p class="text-gray-500">We are just a click away when you crave for delicious fast food</p>
            </div>

            <div class="flex items-center justify-center gap-10 mb-5"><!-- Hero buttons -->
                <button class="flex gap-4 items-center justify-center bg-primaryred p-4 rounded-full"><!-- Buy Now button -->
                    <div class="bg-primaryYellow p-4 flex items-center justify-center rounded-full">
                        <span class="material-symbols-outlined">
                            shopping_bag
                        </span>
                    </div>
                    <span class="text-white font-bold text-xl">Buy Now</span>
                </button>

                <button class="flex gap-4 items-center justify-center"><!-- How To Order Button -->
                    <div class="bg-primaryred p-4 rounded-full relative">
                        <div class="bg-white p-4 rounded-full flex items-center justify-center shadow-md">
                            <span class="material-symbols-outlined text-primaryYellow">
                                play_arrow
                            </span>
                        </div>
                    </div>
                    <span class="font-bold text-xl">How To Order</span>
                </button>
            </div>
        </div>

        <div class="m-5 hidden lg:block"><!-- Right Content -->
            <img src="./img/Herofood.png" alt="" class="w-full">
        </div>
    </div>
</div>`;

  // Populate home document structure in content
  console.log(home);
  content.innerHTML = home;
};

export default populateHome;
