var data = {
    "currentDate": "2022-01-01",
     "events":[
      {
        _id: 1,
        "image":"https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        _id: 2,
        "image":"https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        "name":"Korean style",
        "date":"2022-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        _id: 3,
        "image":"https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
      {
        _id: 4,
        "image":"https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
      },
      {
        _id: 5,
        "image":"https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
      },
      {
        _id: 6,
        "image":"https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        "name":"Halloween Night",
        "date":"2022-02-12",
        "description":"Come with your scariest costume and win incredible prizes.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":12000,
        "estimate":9000,
        "price":12
      },
      {
        _id: 7,
        "image":"https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        "name":"Metallica in concert",
        "date":"2022-01-22",
        "description":"The only concert of the most emblematic band in the world.",
        "category":"Music Concert",
        "place":"Room A"
        ,"capacity":138000,
        "estimate":138000,
        "price":150
      },
      {
        _id: 8,
        "image":"https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
        _id: 9,
        "image":"https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        "name":"10K for life",
        "date":"2021-03-01",
        "description":"Come and exercise, improve your health and lifestyle.",
        "category":"Race",
        "place":"Soccer field",
        "capacity":30000,
        "assistance":25698,
        "price":3
      },
      {
        _id: 10,
        "image":"https://i.postimg.cc/zv67r65z/15kny.jpg",
        "name":"15K NY",
        "date":"2022-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
      {
        _id: 11,
        "image":"https://i.postimg.cc/Sst763n6/book1.jpg",
        "name":"School's book fair",
        "date":"2022-10-15",
        "description":"Bring your unused school book and take the one you need.",
        "category":"Book Exchange",
        "place":"Room D1",
        "capacity":150000,
        "estimate":123286,
        "price":1
      },
      {
        _id: 12,
        "image":"https://i.postimg.cc/05FhxHVK/book4.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
      },
      {
        _id: 13,
        "image":"https://i.postimg.cc/vH52y81C/cinema4.jpg",
        "name":"Batman",
        "date":"2021-03-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
      },
      {
        _id: 14,
        "image":"https://i.postimg.cc/T3C92KTN/scale.jpg",
        "name":"Avengers",
        "date":"2022-10-15",
        "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":9000,
        "estimate":9000,
        "price":250
      }
    ]
  };

  console.log("hola");
  let upcomingevents=[];
  let pastevents=[];
  console.log("eventos:");
  console.log("fecha de eventos: ");
  let eventos=document.getElementById("eventos");
      let imagenes=[document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4")];
      let titulos=[document.getElementById("title1"), document.getElementById("title2"), document.getElementById("title3"), document.getElementById("title4")];
      let desc=[document.getElementById("desc1"), document.getElementById("desc2"), document.getElementById("desc3"), document.getElementById("desc4")];
      let price=[document.getElementById("price1"), document.getElementById("price2"), document.getElementById("price3"), document.getElementById("price4")];
      let titles=[];
      let description=[];
      let prce=[];
      let img=[];
      for (clave of data.events){
        
        if(clave.date>data.currentDate){
          titles.push(clave.name);
          description.push(clave.description);
          prce.push(clave.price);
          img.push(clave.image);
          
          }
        
      }
      console.log(titles);
  for (clave of data.events){
      console.log(clave.date);
      evento=clave;
      if(clave.date>data.currentDate){
        
          upcomingevents.push(clave);
          
        }
      
    }
    console.log("eventos futuros: "+upcomingevents);
          
            
      console.log("eventos pasados: "+pastevents);
      
      /*for (i=0; i<4; i++){
        imagenes[i].setAttribute("src", img[i]);
        titulos[i].innerHTML=titles[i];
        desc[i].innerHTML=description[i];
        price[i].innerHTML=("Price: $"+prce[i]);
      }*/
      let categorias = [];
                                  
                                  let categoriasi = [];
                                  for (clave of data.events){
                                  categorias=clave.category;
                                  
                                  if(!categoriasi.includes(clave.category)){
                                    categoriasi.push(clave.category);
                                  }
                                  
                                }
                                function imprimirCheckboxs(){
                                for(i=0; i<7; i++){
                                  
                                  let categories =document.querySelector("#categories");
                                  let label = document.createElement("label");
                                  label.id=("categories"+i);
                                  let input =document.createElement("input");
                                  input.type = "checkbox";
                                  input.id=("cat"+i);
                                  label.innerHTML=categoriasi[i];
                                  label.appendChild(input);
                                  categories.appendChild(label);


                                }
                                  let central =document.querySelector("#central");
                                  let search =document.createElement("input");
                                  search.type="text";
                                  search.id="search"
                                  let lupa =document.createElement("img");
                                  lupa.setAttribute("src", "./assets/lupa.png");
                                  lupa.id="lupa";
                                  search.appendChild(lupa);
                                  categories.appendChild(search);
                                  categories.appendChild(lupa);
                              }
                              imprimirCheckboxs();
      upcomingevents.forEach(evento=>{
        imprimirCards(evento);
        });
      
        function imprimirCards(evento){
          i=evento._id-1;
          let div=document.createElement("div");
        
        let divisor=document.createElement("div");
        divisor.className=("card");
        eventos.appendChild(divisor);
        imagenes[i]=document.createElement("img");
        imagenes[i].setAttribute("src", evento.image);
        divisor.appendChild(imagenes[i]);
        titulos[i]=document.createElement("h2");
        titulos[i].innerHTML=evento.name;
        divisor.appendChild(titulos[i]);
        desc[i]=document.createElement("p");
        desc[i].innerHTML=evento.description;
        divisor.appendChild(desc[i]);
        price[i]=document.createElement("p");
        price[i].innerHTML=("Price: $"+evento.price);
        divisor.appendChild(price[i]);
        let nav=document.createElement("nav");
        
        nav.innerHTML= `<a href="./details.html?_id=${evento._id}">Ver Mas</a>`
        divisor.appendChild(nav);
        }
        function imprimirCard(evento){
          i=evento._id-1;
          let categoria= evento.categoria
          let Categoria=evento.category.split(" ").join("");
          
        let event=document.getElementById("evento");
        let divisor=document.createElement("div");
        divisor.className=(Categoria);
        event.appendChild(divisor);
        imagenes[i]=document.createElement("img");
        imagenes[i].setAttribute("src", evento.image);
        divisor.appendChild(imagenes[i]);
        titulos[i]=document.createElement("h2");
        titulos[i].innerHTML=evento.name;
        divisor.appendChild(titulos[i]);
        desc[i]=document.createElement("p");
        desc[i].innerHTML=evento.description;
        divisor.appendChild(desc[i]);
        price[i]=document.createElement("p");
        price[i].innerHTML=("Price: $"+evento.price);
        divisor.appendChild(price[i]);
        let nav=document.createElement("nav");
        
        nav.innerHTML= `<a href="./details.html?_id=${evento._id}">Ver Mas</a>`
        divisor.appendChild(nav);
        
        }
      let Events=[];
      Events=upcomingevents;
      function borrarCards(){
        
        
        let card = Array.prototype.slice.call(document.getElementsByClassName("card"), 0);;
        for (cards of card){
        cards.remove();
        }    
      };
      
      function filtrar1(){
        
        let catI =document.getElementById("categories0").textContent;

            let categoria1=[];
            categoria1=Events.filter(evento=>evento.category.toUpperCase()==catI.toUpperCase());
            console.log(categoria1);
            let div=document.createElement("div");
            categoria1.forEach(evento=>{
              imprimirCard(evento);
              
                    });
                    borrarCards();            
                  };
          function filtrar2(){
            
            let catII =document.getElementById("categories1").textContent;
            
                let categoria2=[];
                categoria2=Events.filter(evento=>evento.category.toUpperCase()==catII.toUpperCase());
                console.log(categoria2);
                let div=document.createElement("div");
          categoria2.forEach(evento=>{
          imprimirCard(evento)

                });
                borrarCards()
              };      
              function filtrar3(){
                
                let catIII =document.getElementById("categories2").textContent;
                
                    let categoria3=[];
                    categoria3=Events.filter(evento=>evento.category.toUpperCase()==catIII.toUpperCase());
                    console.log(categoria3);
                    let div=document.createElement("div");
              categoria3.forEach(evento=>{
              imprimirCard(evento);
                    });
                  
                borrarCards()
                  };    
                  function filtrar4(){
                    
                    let catIV =document.getElementById("categories3").textContent;
                    
                        let categoria4=[];
                        categoria4=Events.filter(evento=>evento.category.toUpperCase()==catIV.toUpperCase());
                        console.log(categoria4);
                        let div=document.createElement("div");
                  categoria4.forEach(evento=>{
                  imprimirCard(evento)      
                });
                borrarCards()
                      };
                      function filtrar5(){
                        
                        let catV =document.getElementById("categories4").textContent;
                        
                            let categoria5=[];
                            categoria5=Events.filter(evento=>evento.category.toUpperCase()==catV.toUpperCase());
                            console.log(categoria5);
                            let div=document.createElement("div");
                      categoria5.forEach(evento=>{
                      imprimirCard(evento);
                          });
                          borrarCards()
                          };    
                          function filtrar6(){
                            
                            let catVI =document.getElementById("categories5").textContent;
                            
                                let categoria6=[];
                                categoria6=Events.filter(evento=>evento.category.toUpperCase()==catVI.toUpperCase());
                                console.log(categoria6);
                                let div=document.createElement("div");
                          categoria6.forEach(evento=>{
                          imprimirCard(evento)
                              });
                              borrarCards()
                              };    
                              function filtrar7(){
                                
                                let catVII =document.getElementById("categories6").textContent;
                                
                                    let categoria7=[];
                                    categoria7=Events.filter(evento=>evento.category.toUpperCase()==catVII.toUpperCase());
                                    console.log(categoria7);
                                    let div=document.createElement("div");
                              categoria7.forEach(evento=>{
                              imprimirCard(evento);
                                    });
                                    borrarCards()
                                  };  
                                  function filtrar8(){
                                
                                    let catVIII =document.getElementById("search");
                                    console.log(catVIII);
                                        let categoria8=[];
                                        categoria8=Events.filter(evento=>evento.name.toUpperCase().includes(catVIII.value.toUpperCase())||evento.description.toUpperCase().includes(catVIII.value.toUpperCase()||evento.category.toUpperCase().includes(catVIII.value.toUpperCase())));
                                        console.log(categoria8);
                                        let div=document.createElement("div");
                                  if(catVIII.value!=""){
                                        categoria8.forEach(evento=>{
                                  imprimirCard(evento);
                                        });
                                  }
                                        borrarCards()
                                      };  
                                  let cat1 =document.getElementById("cat0").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar1();
                                    } else {
                                      let comida = Array.prototype.slice.call(document.getElementsByClassName("FoodFair"), 0);
                                      for (comidas of comida){
                                        comidas.remove();
                                      }
                                    }
                                  })
                                  let cat2 =document.getElementById("cat1").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar2();
                                    } else {
                                      let museo = Array.prototype.slice.call(document.getElementsByClassName("Museum"), 0);
                                      for (museos of museo){
                                        museos.remove();
                                      }
                                    }
                                  })
                                  let cat3 =document.getElementById("cat2").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar3();
                                    } else {
                                      let fiesta = Array.prototype.slice.call(document.getElementsByClassName("CostumeParty"), 0);
                                      for (fiestas of fiesta){
                                        fiestas.remove();
                                      }
                                    }
                                  })
                                  let cat4 =document.getElementById("cat3").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar4();
                                    } else {
                                      let recital = Array.prototype.slice.call(document.getElementsByClassName("MusicConcert"), 0);
                                      for (recitales of recital){
                                        recitales.remove();
                                      }
                                    }
                                  })
                                  let cat5 =document.getElementById("cat4").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar5();
                                    } else {
                                      let carrera = Array.prototype.slice.call(document.getElementsByClassName("Race"), 0);
                                      for (carreras of carrera){
                                        carreras.remove();
                                      }
                                    }
                                  })
                                  let cat6 =document.getElementById("cat5").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar6();
                                    } else {
                                      let libro = Array.prototype.slice.call(document.getElementsByClassName("BookExchange"), 0);
                                      for (libros of libro){
                                        libros.remove();
                                      }
                                    }
                                  })
                                  let cat7 =document.getElementById("cat6").addEventListener('change', (e)=>{
                                    if (e.target.checked) {
                                      filtrar7();
                                    } else {
                                      let cine = Array.prototype.slice.call(document.getElementsByClassName("Cinema"), 0);
                                      for (cines of cine){
                                        cines.remove();
                                      }
                                      
                                    }
                                  })
                                  let cat8 =document.getElementById("lupa").addEventListener('click', filtrar8);
 
      