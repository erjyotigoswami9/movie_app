var searchBtn = document.querySelector(".searchBtn") ;
var searchBtn2 = document.querySelector(".searchBtn2") ;
var searchInput = document.querySelector(".searchInput") ;
var container = document.querySelector(".container") ;


//  https://omdbapi.com/?apikey=788ae520&s=Avengers

var API_KEY = "788ae520" ;

var arr = ["",] ;

function searchFunc(){
 
    //console.log("hi")
    var inputValue = searchInput.value ;
    
    container.innerHTML = "" ;
    let p1 = document.createElement("p") ;
    p1.innerHTML = "<br><br><br><br> <b> Loading ...... <br>pls wait ! </b>"
    p1.style.margin="auto" ;
    p1.style.marginTop = "100px" ;
    p1.style.fontSize = "40px" ;
    p1.style.color = "green" ;
    p1.style.textAlign = "center" ;
    container.append(p1) ;
    var url = `https://omdbapi.com/?apikey=${API_KEY}&s=${inputValue}` ;
    //console.log(url) ;
    setTimeout(function(){ 
    fetch(`${url}`)
    .then((res)=> res.json())
    .then((res)=>{ 
       // if(inputValue!=""|| inputValue!=" ")
          arr.push(inputValue) ;
        let obj = { detail : inputValue}
        if(localStorage.getItem("history")){
            let hist = [] ;
            hist = JSON.parse(localStorage.getItem("history")) ;
            // if(!(hist.includes(obj["detail"])))
//0
// : 
// {detail: "narnia"}
// 1
// : 
// {detail: "twilight"}
// 2
// : 
// {detail: "narnia"}
// 3
// : 
// {detail: "dangal"}
// 4
// : 
// {detail: "dangal"}
            var flag = false ;
            for(let i=0;i<hist.length;i++){
                if(obj.detail===hist[i].detail) 
                {
                    console.log(hist[i].detail,"hello");
                    flag = true ;
                    break ;
                }
                
            }   
            if(flag==false)
            {
                console.log("yes","local sending")
                hist.push(obj) ;
                localStorage.setItem("history",JSON.stringify(hist)) ;
            }   
        }
        else{
            let hist = [] ;
            hist.push(obj) ;
            localStorage.setItem("history",JSON.stringify(hist)) ;
        }
       displayResult(res.Search)}) 
    
    },500) ;

    
}


function displayResult(data){
     
    console.log(data) ;
    container.innerHTML = "" ;
    data.forEach(function(ele){
        let div = document.createElement("div") ;
        div.setAttribute("id","cl1") ;
        let title = document.createElement("p") ;
        let img = document.createElement("img") ;
        img.src = ele.Poster ;
        title.innerHTML ="<b>Title  &nbsp; </b>" + ele.Title ;
        let year = document.createElement("p") ;
        year.innerHTML = "<b>Year &nbsp; </b>" + ele.Year ;
        let imdbId = document.createElement("p") ;
        imdbId.innerHTML = "<b>imdbID &nbsp; </b>" + ele.imdbID ;
        let type = document.createElement("p") ;
        type.innerHTML = "<b>Type &nbsp; </b>" + ele.Type ;
        
        div.append(img,title,year,type,imdbId);
        div.addEventListener("click",function(event){
            event.preventDefault() ;
            localStorage.setItem("movieId",ele.imdbID) ;
            window.location.href = "page2.html" ;
        })
        container.append(div) ;
       
    })

}


function searchHistory(history){
    if(localStorage.getItem("history")){
        // var count = 1 ;
        container.innerHTML = "" ;
        let hist = JSON.parse(localStorage.getItem("history")) ;
        let ul2 = document.createElement("ul") ;
       
        // const set = new Set(hist);

        // // Convert the Set back to an array.
        // const uniqueArr = Array.from(set);
        // console.log(uniqueArr)

        hist.forEach((ele)=>{
            // if(count==1){ count++ ; }
            // else{
            if(ele.detail==""|| ele.detail==" ") {}
            else{
            let li2 = document.createElement("li") ;
            li2.innerText = ele.detail ;
            li2.addEventListener("click",function(event){
                event.preventDefault() ;
                searchInput.value = ele.detail ;
                searchFunc() ;
            })
            ul2.append(li2) ; }
            // }
        })
        container.append(ul2) ;
    }
    else 
   {let count = 1 ;
    container.innerHTML = "" ;
    if(history.length==1) { container.innerHTML = "No Data !"} 
    else {
    let ul = document.createElement("ul") ;
    history.forEach(function(ele){
        if(count==1)
         { count++ ;} 
         else 
        {
           let li = document.createElement("li") ;
           li.textContent = ele ;
           ul.append(li) ;
         }
    })
     container.append(ul) ;
    }}
}



// searchBtn.addEventListener("click",function(event){
//     event.preventDefault();

//     searchFunc() ;
// }) ;

searchBtn2.addEventListener(`click`,function(event){
    event.preventDefault() ;
    searchHistory(arr) ;
}) ;

var searchInput = document.querySelector(".searchInput") ;
   var Container = document.querySelector(".Container") ;
   var searchBtn = document.querySelector(".searchBtn") ;

   count = 0 ;
   let timerNext ;

   let flag = false ;
   if(!flag){
      Container.style.display = "none" ;
   }
  

   var appendData = (dataArr)=>{
    Container.innerHTML = "" ;
    //console.log(data) ;
    console.log("hi")
    console.log(dataArr) ;
    dataArr.forEach((ele)=>{
         let p = document.createElement("p") ;
         p.innerHTML = ele.Title ;
         Container.style.display = flag ? "block" : "none" ;
         p.addEventListener(`click`,()=>{
            
            container.innerHTML = "" ;
          
            let arr2 = [] ;
            arr2.push(ele.Title) ;
        let obj = { detail : ele.Title}
        if(localStorage.getItem("history")){
            let hist = [] ;
            hist = JSON.parse(localStorage.getItem("history")) ;
            let flag = false ;
            for(let i=0;i<hist.length;i++){
                if(obj.detail===hist[i].detail) 
                {
                    console.log(hist[i].detail,"hello");
                    flag = true ;
                    break ;
                }
                
            }   
            if(flag==false)
            {
                console.log("yes","local sending")
                hist.push(obj) ;
                localStorage.setItem("history",JSON.stringify(hist)) ;
            }   
        }
        else{
            let hist = [] ;
            hist.push(obj) ;
            localStorage.setItem("history",JSON.stringify(hist)) ;
        }

            let div = document.createElement("div") ;
        div.setAttribute("id","cl1") ;
        let title = document.createElement("p") ;
        let img = document.createElement("img") ;
        img.src = ele.Poster ;
        title.innerHTML ="<b>Title  &nbsp; </b>" + ele.Title ;
        let year = document.createElement("p") ;
        year.innerHTML = "<b>Year &nbsp; </b>" + ele.Year ;
        let imdbId = document.createElement("p") ;
        imdbId.innerHTML = "<b>imdbID &nbsp; </b>" + ele.imdbID ;
        let type = document.createElement("p") ;
        type.innerHTML = "<b>Type &nbsp; </b>" + ele.Type ;
        
        div.append(img,title,year,type,imdbId);
        div.addEventListener("click",function(event){
            event.preventDefault() ;
            localStorage.setItem("movieId",ele.imdbID) ;
            window.location.href = "page2.html" ;
        })
        container.append(div) ;
        
        if(timerNext){
            clearTimeout(timerNext) ;
        }
        timerNext = setTimeout(()=>{
            Container.style.display = "none" ;
            flag = false ;
        },700)
         })
         Container.append(p) ;
      }) ;
      
   }

   let getData = async (movie)=>{
    try{
                        //  https://omdbapi.com/?apikey=788ae520&s=Avengers
            
          if(movie.length<3){
            Container.innerHTML="" ;
            flag = false ;
            Container.style.display = "none" ;
            return false;
          }              
          let res = await fetch(`https://omdbapi.com/?apikey=788ae520&s=${movie}`) ;
          let data = await res.json() ;
        //   console.log(data.Search) ;
          return data ;
        //   appendData(data) ;

    }catch(error){
          console.log(error) ;
    }
   }
   var id ;
   var controller = async(valueInput)=>{
      let dataArr = await getData(valueInput) ;
      //console.log(dataArr) ;
      if(dataArr.Search)  
      appendData(dataArr.Search) ;
   }
   var debounce = (operation,value,delay)=>{
      if(id){
         clearTimeout(id) ;
      }
      
      id =  setTimeout(()=>{
         operation(value) ;
      },delay)
   }
   
   searchInput.addEventListener(`input`,()=>{
    console.log(searchInput.value) ;
    Container.style.backgroundColor = "lightpink" ;
    container.innerHTML = "" ;
    flag = true ;
    debounce(controller,searchInput.value,500) ;
   });

   
let countCheck , clickcount ;

searchBtn.addEventListener(`click`,()=>{
      container.innerHTML = "" ;
         console.log("function...") ;
      if(countCheck){
         clearTimeout(countCheck) ;
      }
      countCheck = setTimeout(()=>{
         console.log("debounce...")
         Container.innerHTML = "" ;
      Container.style.backgroundColor = "lightblue" ;
         Container.style.display = "block" ;
         flag = true ;
         debounce(controller,searchInput.value,500) ;
      },500)

      if(clickcount){
        clearTimeout(clickcount) ;
      }

      clickcount = setTimeout(()=>{
        Container.innerHTML = "" ;
        Container.style.display = "none" ;
        flag = false ;
        searchFunc() ;
      },4000)
   })
