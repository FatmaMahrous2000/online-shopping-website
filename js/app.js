var app=new Vue({
    el:'#test',
    data:{
      
      checkAny:false,
       
        password:'',
        name:'',
        email:'',
        phone:'',
        city:'',
        postal:'',


        messagePassword:'',
        messageName:'',
        messageEmail:'',
        messagePhone:'',
        messageCity:'',
        messagePostal:'',
        messageUserNameLogin:'',
        messagePasswordLogin:'',

        passwordEmpty:false,
        nameEmpty:false,
        phoneEmpty:false,
        emailEmpty:false,
        cityEmpty:false,
        postalEmpty:false,
        userNameLoginEmpty:false,
        passwordLoginEmpty:false,


        heightSlider:1000,
        heightHeader:1000,
       regesterSuccess:false,
       checkLogin:false,
       checkNoLogin:false,
       checkLoginMessage:false,

      
    
       viewCart:false,

       sum:0,




       nameContact:'',emailContact:'',messageContact:'',
       nameContactEmpty:false,emailContactEmpty:false,messageContactEmpty:false,messageWrongNameContact:'',

       object:{name:'',password:'',email:'',phone:'',city:'',postal:''},

       userNameLogin:'',passwordLogin:'',


       users:[{name:'FatmaMahrous',password:'Fatma123',email:'fatma@gmail.com',phone:'11223344552',city:'cairo',postal:'1234'},
         {name:'kareemMahrous',password:'KareemMahous1',email:'kareem@gmail.com',phone:'45676545633',city:'giza',postal:'6685'}, 
         {name:'nadiaBadr',password:'Nadia12345',email:'nadia@gmail.com',phone:'94856303033',city:'cairo',postal:'1234'}],
   



         products:[
                  { price:25,image:"images/460643_002_ss_01.webp",category:"home",id:1},
                  { price:30 ,image:"images/theyyam-tshirt-mydesignation-image-.jpg" ,category:"home",id:2},
                  { price:40 ,image:"images/cyrus_circle.jpg",category:"home",id:3},
                  { price:20,image:"images/90_DBFI050-DVIT4B_1P65V_20_LaMedusaStuddedRoundCameraBag-ShoulderBags-versace-online-store_0_2.jpg",category:"home",id:4},
                  { price:35,image:"images/PU-Leather-Large-Capacity-Woman-Handbag-Grid-Shoulder-Bag-Fashion-Casual-Luxury-Designer-Crossbody-Bag-Ladies.jpg_640x640.webp",category:"home",id:5},
                  { price:45,image:"images/fdf0727c8428f6d1cfdc93e9726e1795.jpg",category:"home",id:6},
                  { price:30 ,image:"images/1608191555ab585116fb1b3f892150e679c960f03e_thumbnail_405x552.webp",category:"home",id:7},
                  { price:20,image:"images/Dive-mobile-box.jpg",category:"home",id:8},
                  { price:35,image:"images/Allbirds_WL_RN_SF_PDP_Natural_Grey_BTY_10b4c383-7fc6-4b58-8b3f-6d05cef0369c_600x600.png",category:"home",id:9},
                  { price:25 ,image:"images/mam-ufo-basket-bag-fashion-design-vdf-products-fair_dezeen_hero-1-852x608.jpg" ,category:"home",id:10},
                  { price:30 ,image:"images/79f59b0639063a0e7503e5e1388ebdc1--t-shirts-with-funny-sayings-shirt-sayings.jpg" ,category:"home",id:11},
                  { price:40 ,image:"images/4B88C4329C584780A506694BBA4AEC3D.jpg" ,category:"home",id:12},
                  { price:34 ,image:"images/screen-shot-2021-04-13-at-11-48-30-am-1618328921.png" ,category:"home",id:13},
                  { price:20 ,image:"images/images (7).jpg" ,category:"home",id:14},
                  { price:25,image:"images/IMG_9272.jpg" ,category:"home",id:15},




                  { price:30 ,image:"images/Mkw09fYA0V24uD5gi3rxSHHt4YPLoEZ69DlOKKpq.jpeg" ,category:"bags",id:16},
                  { price:25 ,image:"images/Burberry1.jpg" ,category:"bags",id:17},
                  { price:45 ,image:"images/2813.jpg" ,category:"bags",id:18},
                  { price:20,image:"images/7987002-1c533c1cd1.jpg" ,category:"bags",id:19},
                  { price:40 ,image:"images/2020-Handbag-Brands-Women-Shoulder-Bag-Chain-Strap-Flap-ladies-leather-Handbags-Messenger-Bag-women-Clutch.webp" ,category:"bags",id:20},
                  { price:25 ,image:"images/Btl10351-New-Arrival-Lady-Leather-Hand-Bags-Luxury-Designer-Women-Handbags-Famous-Brands-2020.jpg" ,category:"bags",id:21},
                  { price:30 ,image:"images/m_5d2753ba2eb33f9d9de42777.jpg" ,category:"bags",id:22},
                  { price:20 ,image:"images/Fortnite-Battle-Royale-School-Bag-Back-Bags-for-Women-2018-Noctilucous-Backpack-Student-Luminous-Backpack-Notebook.jpg_640x640.webp" ,category:"bags",id:23},
                  { price:40 ,image:"images/2019-Korean-Style-Women-Mini-Backpack-PU-Leather-Shoulder-Bag-For-Teenage-Girls-Multi-Function-Small.jpg" ,category:"bags",id:24},
                  { price:45 ,image:"images/Mini-Backpack-Women-Crossbody-Bag-For-Teenage-Girl-Plaid-Women-Shoulder-Phone-Purse-Korean-Style-New.jpg_220x220xz.jpg_.webp" ,category:"bags",id:25},
                  { price:20,image:"images/Crossbody-2020.jpg_q50.jpg" ,category:"bags",id:26},
                  { price:35 ,image:"images/41R233W11AA09999TU_01.jpg" ,category:"bags",id:27},
                  { price:25 ,image:"images/1544518182_CAL44550_N0_E04_GHC.webp" ,category:"bags",id:28},
                  { price:20 ,image:"images/شنطة_ديور_الجديدة_1.jpg" ,category:"bags",id:29},
                  { price:45 ,image:"images/432x576-1_-uCOatt1Y1bCzJq.jpg" ,category:"bags",id:30},




                  { price:30 ,image:"images/Penji-Sample-Tshirt-Design-5.jpeg" ,category:"t-shirt",id:31},
                  { price:20 ,image:"images/mdemataphoto-phenomenalwoman-0237.jpg" ,category:"t-shirt",id:32},
                  { price:45 ,image:"images/s-l225.jpg" ,category:"t-shirt",id:33},
                  { price:20 ,image:"images/9cc71ae374e8f5058b8144abebc3b741.png" ,category:"t-shirt",id:34},
                  { price:40 ,image:"images/army-green-tshirt-for-men-plain_600x.webp" ,category:"t-shirt",id:35},
                  { price:25 ,image:"images/T-ShirtFinal_860x.jpg" ,category:"t-shirt",id:36},
                  { price:30 ,image:"images/7027f088-902d-404b-a442-15d55cb36f17-e1513640648577.jpg" ,category:"t-shirt",id:37},
                  { price:20 ,image:"images/white-t-shirt-mockup_125540-452.jpg" ,category:"t-shirt",id:38},
                  { price:40 ,image:"images/images (4).jpg" ,category:"t-shirt",id:39},
                  { price:45 ,image:"images/jesus_modern_design_t_shirt-r2bec2ea5d1c841928c55888778e4e8b6_k2gm8_704.jpg" ,category:"t-shirt",id:40},
                  { price:20 ,image:"images/attachment_63953840-e1513614372397.jpg" ,category:"t-shirt",id:41},
                  { price:35 ,image:"images/mdemataphoto-phenomenalwoman-0237.jpg" ,category:"t-shirt",id:42},
                  { price:25 ,image:"images/images (5).jpg" ,category:"t-shirt",id:43},
                  { price:20 ,image:"images/modern-cool-artistic-design-t-shirt_37433-177.jpg" ,category:"t-shirt",id:44},
                  { price:45 ,image:"images/723154_20078269_3627452_7cdf1d75_thumbnail.png" ,category:"t-shirt",id:45},
                  



                  
                  { price:30 ,image:"images/IW503605_tile_1.717.jpg.transform.article_image_335_2x (1).webp" ,category:"watches",id:46},
                  { price:25 ,image:"images/Galaxy-Watch3_Mystic-Bronze-and-Black-Close-Up_Lifestyle.jpg" ,category:"watches",id:47},
                  { price:45 ,image:"images/HMTe-HM-9072-Metal-Analog-SDL494827480-1-db8fc.jpg" ,category:"watches",id:48},
                  { price:20 ,image:"images/Ew10MnNXIAAqCju.0.jpeg" ,category:"watches",id:49},
                  { price:40 ,image:"images/Gear-Apple_watch-series-6-stainless-steel-case-orange-band_09152020.jpg" ,category:"watches",id:50},
                  { price:25 ,image:"images/AL_WEB_Social_Media_Alpiner_Regulator_Homepage_Slider_Mobile_x800.jpg" ,category:"watches",id:51},
                  { price:30 ,image:"images/hp_our_categories_sport.webp" ,category:"watches",id:52},
                  { price:20 ,image:"images/0b8e7b6b-f912-4f82-9536-80544b9127631582784256862-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-1721582784-1.webp" ,category:"watches",id:53},
                  { price:40 ,image:"images/menu_push_prx.webp" ,category:"watches",id:54},
                  { price:45 ,image:"images/moonwatch-xs-master.jpg" ,category:"watches",id:55},
                  { price:20 ,image:"images/eg-feature-galaxy-watch3-bluetooth-45mm-139-275056577.webp" ,category:"watches",id:56},
                  { price:35 ,image:"images/mach1_jaisalmer_black_600x.jpg" ,category:"watches",id:57},
                  { price:25 ,image:"images/smartwatch-2048px-7639.jpg" ,category:"watches",id:58},
                  { price:20 ,image:"images/stilllife-straps-04_final.jpg" ,category:"watches",id:59},
                  { price:45 ,image:"images/c1729c0b-da89-421d-80f3-2cc9b9a7a3c01576839452666-Roadster-Men-Black-Analogue-Watch-MFB-PN-WTH-6292G-794157683-1.webp" ,category:"watches",id:60},
                     



                   
                  { price:30 ,image:"images/cq5dam.web.1280.1280.webp" ,category:"shoes",id:61},
                  { price:25 ,image:"images/images.jpg" ,category:"shoes",id:62},
                  { price:45 ,image:"images/-1117Wx1400H-460342492-blue-MODEL.webp" ,category:"shoes",id:63},
                  { price:20 ,image:"images/2_LAWRENCE_JAN_2021.jpg" ,category:"shoes",id:64},
                  { price:40 ,image:"images/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg" ,category:"shoes",id:65},
                  { price:25 ,image:"images/SergioRossiFW21_38_2348_menu.jpg" ,category:"shoes",id:66},
                  { price:30 ,image:"images/cq5dam.web.1280.1280 (1).webp" ,category:"shoes",id:67},
                  { price:20 ,image:"images/best-shoes-1610418585.jpg" ,category:"shoes",id:68},
                  { price:40 ,image:"images/268453-Best_Running_Shoes_for_Flat_Feet-1296x728-header-1296x728.jpg" ,category:"shoes",id:69},
                  { price:45 ,image:"images/ggvs-fuegos-custom-italian-shoes-638eecf701e56b31aa44603f764eaa22.webp" ,category:"shoes",id:70},
                  { price:20 ,image:"images/images (6).jpg" ,category:"shoes",id:71},
                  { price:35 ,image:"images/merlin_168154896_a69879b8-d43a-40d0-8297-dd7086d7d784-mobileMasterAt3x.jpg" ,category:"shoes",id:72},
                  { price:25,image:"images/Canvas_-_Mens.jpg" ,category:"shoes",id:73},
                  { price:20 ,image:"images/SS21_Refresh1_NewArrivalsVenture.webp" ,category:"shoes",id:74},
                  { price:45 ,image:"images/SKX44314-2020-New-Site-Q2-Content-Grid_W_Athletic-Sneakers_13325-GYMT.jpg" ,category:"shoes",id:75},
        ],


                items:[],


},

    methods:{
        validate:function(){
          if(this.name=='')
          {
            this.nameEmpty=true;
          this.messageName="Please enter your name";
          this.checkAny=true;
       
          }

            if(this.password=='')
            {
              this.passwordEmpty=true;
            this.messagePassword="Please enter your Password";
            this.checkAny=true;
            }


            if(this.email=='')
            {
              this.emailEmpty=true;
            this.messageEmail="Please enter your Email";
            this.checkAny=true;
            }

            if(this.phone=='')
            {
              this.phoneEmpty=true;
            this.messagePhone="Please enter your phone number";
            this.checkAny=true;
            }
           
            
            if(this.city=='')
            {
              this.cityEmpty=true;
            this.messageCity="Please choose your city";
            this.checkAny=true;
            }
            
             if(this.postal=='')
            {
              this.postalEmpty=true;
            this.messagePostal="Please enter your postal";
            this.checkAny=true;
            }

           

            if(this.validateName()==true&&this.validatePassword()==true&&this.validateEmail()==true&&this.validatePhone()==true&&this.validatePostal()==true&&this.city!='')
            {
              this.regesterSuccess=true;
              this.heightSlider=600;
              this.heightHeader=650;
              


              this.object.name=this.name;this.object.password=this.password;
              this.object.email=this.email;this.object.phone=this.phone;
              this.object.city=this.city; this.object.postal=this.postal;
              this.users.push(this.object);
            }
              else
              this.regesterSuccess=false; 
            
        },

        validateName:function(){
         
          var flagLower=0,flagUpper=0,num=0;
          for(i=0;i<this.name.length;i++)
          {
             
            if (!isNaN(this.name.charAt(i) * 1)){
              num++;
           }
            else {

              if (this.name.charAt(i) == this.name.charAt(i).toUpperCase()) 
              {  
                  flagUpper++;
              }
              if (this.name.charAt(i) == this.name.charAt(i).toLowerCase()) 
              {  
                  flagLower++;
              }
             
          }
        }

         
       if(this.name.length==0||(num==0 && flagLower>0 && flagUpper>0 && this.name.length>=8))
           {
           return true;
           
           }

           else{
            this.messageName="Name shoud contain at least 8 charachters, upper case and lower case only";
            this.checkAny=true;
            return false;
               }
 
          },

          validatePassword:function(){
         
            var flagLower=0,flagUpper=0,num=0;
            for(i=0;i<this.password.length;i++)
            {
               
              if (!isNaN(this.password.charAt(i) * 1)){
                num++;
             }
              else {

                if (this.password.charAt(i) == this.password.charAt(i).toUpperCase()) 
                {  
                    flagUpper++;
                }
                if (this.password.charAt(i) == this.password.charAt(i).toLowerCase()) 
                {  
                    flagLower++;
                }
               
            }
          }
  
           
         if(this.password.length==0||(num>0 && flagLower>0 && flagUpper>0 && this.password.length>=8))
            {
             
            return true;
         
            
            }
 
            else{
             this.messagePassword="Name shoud contain at least 8 charachters, upper case,lower case and numbers";
             this.checkAny=true;
             return false;

           
                }
  
           } ,
           
           validatePhone:function(){
         
            var checkNumber=false;
            if(! isNaN(this.phone))
            {
              checkNumber=true;
            }
           
            else
            checkNumber=false;

            if(this.phone.length==0||(checkNumber==true&&this.phone.length==11))
            {
             
            return true; 
            }
    
            else 
            {
              this.messagePhone="Phone number should be 11 numbers only";
              this.checkAny=true;
              return false;
            }

           }  ,


           validatePostal:function(){
         
            var checkNumber=false;
            if(! isNaN(this.postal))
            {
              checkNumber=true;
            }
           
            else
            checkNumber=false;

            if(this.postal.length==0||(checkNumber==true&&this.postal.length==5))
            {
             
            return true; 
            }
    
            else 
            {
              this.messagePostal="Postal should contain 5 numbers only";
              this.checkAny=true;
              return false;
            }

          },
          
          validateEmail:function()
          {

            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (this.email.match(validRegex)||this.email.length==0) {
          
          
              return true;
          
            } else {
          
              this.messageEmail="invaild email";
              this.checkAny=true;
              return false;
          
            }
           
          },


          

          validateLogin:function(){

          
            if(this.userNameLogin=='')
          {
            this.userNameLoginEmpty=true;
          this.messageUserNameLogin="Please enter your name";
       
          }

          if(this.passwordLogin=='')
          {
            this.passwordLoginEmpty=true;
          this.messagePasswordLogin="Please enter your password";
       
          }
         
          for(j=0;j<3;j++)
          {
              if(this.userNameLogin==this.users[j].name&&this.passwordLogin==this.users[j].password)
              {
                    this.checkLogin=true;
                    this.heightSlider=600;
              this.heightHeader=650;
                    break;
              } 
              
          }

          if(this.checkLogin===false&&this.userNameLogin!=""&&this.passwordLogin!="")
          {
            this.checkNoLogin=true;
            alert("invalid user name or passeord");
          }

        },
      
        addProduct:function(product)
        {
         
        this.items.push(product);
        this.sum+=product.price;
        },



        removeProduct:function(product)
        {
          this.items.splice(this.items.indexOf(product),1);
          this.sum-=product.price;
        },



        view:function()
        {
          this.view=true;
        }

    } 
  
  
  

         
})