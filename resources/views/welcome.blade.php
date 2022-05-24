<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous">
    </script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    <!-- <script module src="js/jquery-3.6.0.min.js"></script>  -->
    <script src="https://unpkg.com/imask"></script>

</head>

<body class="bg-dark">
    <div class="w-full max-h-white white_background hero">
        <div class="container mx-auto min-h-white">
            <div class="grid relative">
                <div class="w-full logo flex content-start justify-center flex-wrap flex-col items-start">
                    <img src="images/logo.png" class="_logo" alt="logo">
                    <img src="images/watchup.png" class="watchup shadow-lg shadow-green-500/50" alt="watchup">
                </div>
                <div class="double_col">
                    <div class="grid grid-cols-5 relative">
                        <!-- LEFT -->
                        <div class=" sm:col-span-5 md:col-span-2  xl:col-span-3 sm:w-full_with_border md:w-left hero_left">
                            <h1 class="comeInOpacity hero_title md:text-h1 sm:text-m_h1 font-bold md:leading-h1 sm:leading-m_h1 md:w-left ">
                                Manage WhatsApp Messages, together with your team
                            </h1>
                            <h2 class="comeInOpacity description text-desc font-semibold ">Talking to your customers on WhatsApp shouldn’t be complicated. Send, receive and collaborate.</h2>
                            <button type="button" class=" bg-gray-900 text-white mt-[56px]">Try out WhatsApp - It’s free</button>
                            <h3 class="text-g550 font-medium btn-desc mt-[12px]">*10 minute set up, no credit card</h3>
                        </div>
                        <!-- RIGHT -->
                        <div class="sm:col-span-5 md:col-span-3 xl:col-span-2 hero_right relative">
                            <div class="chat ">

                                <div class="back_ z-0 relative top-0">
                                    <img src="images/anni.png" class="w-full" alt="tag">
                                </div> 
                                <x-ChatMessage></x-ChatMessage>   
                            </div>
                        </div>

                        <div class="col-span-4 flex content-start justify-center flex-wrap flex-col  items-center sponsors absolute ">
                            <h4>Join hundreds of businesses doing more with WhatsApp</h4>
                            <div class="w-full flex content-start justify-center  items-center">
                                <img src="images/Layer1.png" alt="tag">
                                <img src="images/Layer2.png" alt="tag">
                                <img src="images/Layer3.png" alt="tag">
                                <img src="images/Layer4.png" alt="tag">
                                <img src="images/Layer3.png" alt="tag">
                                <img src="images/Layer2.png" alt="tag">

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
    <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
    <div class="w-full min-h-white content">
        <div class="container mx-auto min-h-white ">
            <x-RegisterForm />
        </div>
    </div>
    <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
    <div class="w-full  h-[114px] flex place-items-center place-content-center  bg-white">
        <img src="images/logo.png" alt="logo">
    </div>
</body>

</html>