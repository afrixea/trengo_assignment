 <div class="grid ">
     <div class="w-full flex content-start justify-center  items-center">
         <h1 class="centeredTitle md:text-h1 sm:text-m_h1 font-bold md:leading-h1 sm:leading-m_h1 md:w-left">
             All WhatsApp messages
             delivered in one inbox
         </h1>
     </div>
     <div class="register  mx-auto w-full_with_border max-w-[776px] bg-white min-h-[300px]  flex content-start justify-top flex-wrap flex-col  items-start">
         <h2>START YOUR 14-DAY FREE TRIAL</h2>
         <h1 class="mb-[12px]">Try out WhatsApp in Trengo</h1>
         <h4>Already have an account?<a><u class="sing_in">Sign in</u></a></h4>
         <form class="w-full" id="register_form">

             <div class="grid md:grid-cols-2 md:gap-6">

                 <div class="state  relative">
                     <p class="text-red-500 text-xs italic text-right mb-[12px] absolute right-0" id="username_er"></p>
                     <div class="  w-full mb-6 group">
                         <label class="block text-gray-900 text-sm font-bold mb-[12px]" for="username">
                             First name
                         </label>
                         <input class="writeplace shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight  " id="username" type="text" placeholder="Username">
                     </div>
                 </div>
                 <div class="state  relative">
                     <p class="text-red-500 text-xs italic text-right mb-[12px] absolute right-0" id="lastname_er"></p>
                     <div class="  w-full mb-6 group">
                         <label class="block text-gray-900 text-sm font-bold mb-[12px]" for="lastname">
                             Last name
                         </label>
                         <input class="writeplace shadow rounded-lg appearance-none border   w-full py-2 px-3 text-gray-700 leading-tight  " id="lastname" type="text" placeholder="Lastname">
                     </div>
                 </div>

             </div>
             <div class="state  relative">
                 <p class="text-red-500 text-xs italic text-right mb-[12px] absolute right-0" id="email_er"></p>
                 <div class="mb-4">
                     <label class="block text-gray-900 text-sm font-bold mb-[12px]" for="email">
                         Email
                     </label>
                     <input class="writeplace shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight  " id="email" type="text" placeholder="Email">
                 </div>
             </div>

             <div class="mb-6 ">
                 <label class="block text-gray-900 text-sm font-bold " for="phone">
                     What’s your mobile phone number?
                 </label>
                 <x-ChooseCountry />
             </div>
             <div class="w-full terms float-right"> By continuing, you acknowledge that you have read and agree to our <u>terms & conditions</u> and <u>Privacy Statement</u></div>
             <button type="submit" id="indicator" class=" bg-gray-900 text-white mt-[24px]">Create account</button>
         </form>
     </div>
 </div>

 <script>
     let AccountCreated = false;
     document.getElementById("register_form").addEventListener("submit", function(event) {
         event.preventDefault();
         const resource_ = event.target;
         const object_ = {
             //TODO:instead of taking each index 0- 1-2 -4 make if with indexof
             username: resource_[0].value,
             lastname: resource_[1].value,
             email: resource_[2].value,
             phone: resource_[4].value
         };
         if (AccountCreated) return;
         window.fetchData(window.api_call + "/register", object_, "POST")
             .then(response => response.json())
             .then(data => {
                 let keys_ = Object.keys(object_);
                 if (data.status == 401 || data.status == 409) {
                     if (data.status == 409) {
                         for (var i = 0; i < keys_.length; i++) {
                             if (data.data.errorInfo[2].split("_")[1] == keys_[i]) {
                                 var child = document.querySelector("#" + keys_[i] + "_er");
                                 child.innerHTML = keys_[i] + " exist";
                                 if (!child.parentElement.classList.contains("error")) {
                                     child.parentElement.classList.add("error");
                                 }
                             }
                         } 
                     } else {
                         for (var i = 0; i < keys_.length; i++) {
                             var child = document.querySelector("#" + keys_[i] + "_er");
                             if (data.data[keys_[i]] !== undefined) {
                                 child.innerHTML = data.data[keys_[i]];
                                 if (!child.parentElement.classList.contains("error")) {
                                     child.parentElement.classList.add("error");
                                 }
                             } else {
                                 child.innerHTML = "";
                                 if (child.parentElement.classList.contains("error")) {
                                     child.parentElement.classList.remove("error");
                                 }

                             }
                         }
                     }
                     console.log(data)
                 } else if (data.status == 200) {
                     AccountCreated = true;
                     document.getElementById("indicator").innerHTML = "Account Created!";
                     for (var i = 0; i < keys_.length; i++) {
                         var child = document.querySelector("#" + keys_[i] + "_er");
                         child.innerHTML = "";
                         if (child.parentElement.classList.contains("error")) {
                             child.parentElement.classList.remove("error");
                         }
                     }
                 }

             })
             .catch((error) => {
                 console.log("error")
                 console.log(error)
             });


     });
 </script>