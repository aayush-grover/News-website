var f=0;
var j;
var end;
var flag=0;
function functionality1()
{
xhr= new XMLHttpRequest();
xhr.open("GET","https://newsapi.org/v2/everything?domains=wsj.com&apiKey=47cf1a0bed0b4e97be76454cf46fbb3b");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data=JSON.parse(this.responseText);//changing the data into json format
    if(f==1)
    {
        j=j+5;
    }
    else{
        j=0;
    }
    end=j+5;
     for (i = j; i < end; i=i+2) 
     {        
       
         if(i==j)
         {
             if(flag==0)
             {
            $("#container").append(' <div class="f1"><div class="card" style="width: 46rem;"><div class="hov"><img src="'+data.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
             }
         
            flag++;
         }
         else{
        $("#container").append(' <div class="f1"><div class="card" style="width: 28rem;"><div class="hov"><img src="'+data.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div><div class="card" style="width: 28rem;"><div class="hov"><img src="'+data.articles[i+1].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i+1].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
         }
        f=1;
     }
     document.getElementById("more-news").style.display = "block"; 
    }
  };
}


//working on functionality 2 based on news categories on the basis of country

function functionality2()
{
    var cuntry=document.getElementById("cntry").value;// takes input value
    cuntry = cuntry.charAt(0).toUpperCase() + 
           cuntry.slice(1); 
    console.log(cuntry);
    var xhr1= new XMLHttpRequest();
    xhr1.open("GET","https://api.currentsapi.services/v1/available/regions?apiKey=47cf1a0bed0b4e97be76454cf46fbb3b");
    xhr1.send();
     
var data;
var country;
xhr1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data=JSON.parse(this.responseText);//changing the data into json format 
    country=data.regions[cuntry];
   // document.getElementById("more-news").style.display = "none";
    }
    document.getElementById("more-news").style.display = "block"; 
    var cntry_news;
    var xhr2= new XMLHttpRequest();
    xhr2.open("GET","https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=47cf1a0bed0b4e97be76454cf46fbb3b");
    xhr2.send();
    xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
    cntry_news=JSON.parse(this.responseText);
      console.log(cntry_news);

            for(var i=0;i<5;i++)
            {
                if(i==0)
                {
            console.log(cntry_news.articles[i].title);
            $("#container").append(' <div class="f1"><div class="card" style="width: 46rem;"><div class="hov"><img src="'+cntry_news.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+cntry_news.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
                }
                else{
                    console.log(cntry_news.articles[i].title);
                    $("#container").append(' <div class="f1"><div class="card" style="width: 28rem;"><div class="hov"><img src="'+cntry_news.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+cntry_news.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div><div class="card" style="width: 28rem;"><div class="hov"><img src="'+cntry_news.articles[i+1].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+cntry_news.articles[i+1].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
                }
            }
            document.getElementById("more-news").style.display = "block"; 
        }
        
    };
  }
  
}



//functionality 3


var f=0;
var j;
var end;
var flag=0;
function functionality3()
{
    var d=new Date();
xhr= new XMLHttpRequest();
xhr.open("GET","https://newsapi.org/v2/everything?q=bitcoin&from="+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"&sortBy=publishedAt&apiKey=47cf1a0bed0b4e97be76454cf46fbb3b");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data=JSON.parse(this.responseText);//changing the data into json format
    if(f==1)
    {
        j=j+5;
    }
    else{
        j=0;
    }
    end=j+5;
     for (i = j; i < end; i=i+2) 
     {        
       
         if(i==j)
         {
             if(flag==0)
             {
            $("#container").append(' <div class="f1"><div class="card" style="width: 46rem;"><div class="hov"><img src="'+data.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
             }
         
            flag++;
         }
         else{
        $("#container").append(' <div class="f1"><div class="card" style="width: 28rem;"><div class="hov"><img src="'+data.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div><div class="card" style="width: 28rem;"><div class="hov"><img src="'+data.articles[i+1].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i+1].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
         }
        f=1;
     }
     document.getElementById("more-news").style.display = "block"; 
    }
  };
}





//functionality 4





var f=0;
var j;
var end;
var flag=0;
function functionality4()
{
xhr= new XMLHttpRequest();
xhr.open("GET","https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=47cf1a0bed0b4e97be76454cf46fbb3b");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data=JSON.parse(this.responseText);//changing the data into json format
    if(f==1)
    {
        j=j+5;
    }
    else{
        j=0;
    }
    end=j+5;
     for (i = j; i < end; i=i+2) 
     {        
       
         if(i==j)
         {
             if(flag==0)
             {
            $("#container").append(' <div class="f1"><div class="card" style="width: 46rem;"><div class="hov"><img src="'+data.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
             }
         
            flag++;
         }
         else{
        $("#container").append(' <div class="f1"><div class="card" style="width: 28rem;"><div class="hov"><img src="'+data.articles[i].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div><div class="card" style="width: 28rem;"><div class="hov"><img src="'+data.articles[i+1].urlToImage+'" class="card-img-top" alt="loading"></div><div class="card-body"><h5 class="card-title">'+data.articles[i+1].title+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Read more</a></div></div></div>'); 
         }
        f=1;
     }
     document.getElementById("more-news").style.display = "block"; 
    }
  };
}








//CD8Gn7BE7wnpfFsd2byD9pL5bYBraIh1n70fNcfh2c3PKrth api key

//for country name
//https://api.currentsapi.services/v1/available/regions?apiKey=CD8Gn7BE7wnpfFsd2byD9pL5bYBraIh1n70fNcfh2c3PKrth

//for some latest news

//https://api.currentsapi.services/v1/latest-news?apiKey=CD8Gn7BE7wnpfFsd2byD9pL5bYBraIh1n70fNcfh2c3PKrth
