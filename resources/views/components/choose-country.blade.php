 <div class="state"> 
     <p class="text-red-500 text-xs italic text-right mb-[12px]" id="phone_er"></p>
     <div class="sm:w-[25%] md:w-[15%]  float-left relative">
         <div class=" writeplace selectCountryLeftbox w-full shadow rounded-l-lg appearance-none border bg-gray-100  text-gray-700 mb-3 leading-tight  " onclick="showHide();">
             <img src="http://countryflagsapi.com/png/NL" width="30px" id="flag_">
             <img src="images/arrowdown.png" width="15px">
         </div>
         <div class=" comeInOpacity searchCountry shadow drop-shadow-xl bg-white rounded-lg  p-[22px] absolute" style="display: none;">
             <input type="text" class="shadow bg-gray-100 rounded-lg" id="Cs" onkeydown="scanCountries()" placeholder="Search for countries" title="Type in a name">
             <ul id="LIST"> </ul>
         </div>
     </div>
     <div class="sm:w-[75%] md:w-[85%] float-right">
         <input type="tel" class="writeplace w-full py-2 px-3 shadow rounded-r-lg appearance-none border text-gray-700 mb-3 leading-tight " data-mask="00/00/0000" data-mask-reverse="true" id="phone" placeholder="+31" value="+31">
     </div>
 </div>
 <script>
     var unfillteredCs = "",
         SelectedCode = "31";
     var ul = document.getElementById("LIST");
     var searchCountry = document.querySelector(".searchCountry");
     var flag_ = document.getElementById("flag_");
     var phone_ = document.getElementById("phone");
    
     const mask_ = () => {
         return '+' + SelectedCode + ' 0000 000000';
     }
     const maskOptions = {
         mask: mask_()
     };
     let mask = IMask(phone_, maskOptions);

     const selectCountry = (link, prefix) => {
         flag_.src = link;
         SelectedCode = prefix;
         phone_.value = "+" + prefix;
         phone_.placeholder = "+" + prefix;
         mask.mask = mask_();
         showHide();
     }

     const createData = () => {
         let ent = Object.entries(window.CountriesData_);
         for (var i = 0; i < ent.length; i++) {
             ul.innerHTML += "<li class='rounded-lg' onclick='selectCountry(`http://countryflagsapi.com/png/" + ent[i][0] + "`," + ent[i][1].code + ")'>" + '<img src ="http://countryflagsapi.com/png/' + ent[i][0] + '" width="20px" ><a type="button">' + ent[i][1].name + "</a></li>";
         }
     }

     const scanCountries = (init) => {
         var input, filter, data, a, i, search_;
         input = document.getElementById("Cs");
         if (init != null) {
             input.value = init;
         }
         filter = input.value.toUpperCase();
         data = ul.getElementsByTagName("li");

         for (i = 0; i < data.length; i++) {
             a = data[i].getElementsByTagName("a")[0];
             search_ = a.textContent || a.innerText;
             if (search_.toUpperCase().indexOf(filter) > -1) {
                 data[i].style.display = "";
             } else {
                 data[i].style.display = "none";
             }
         }
     }

     const showHide = () => {
         if (searchCountry.style.display == "none") {
             searchCountry.style.display = "block";
             document.getElementById("Cs").focus();
         } else {
             //TODO::reverse animation
             searchCountry.style.display = "none";
         }
     }
     createData();
     scanCountries("+" + SelectedCode);


 
 </script>