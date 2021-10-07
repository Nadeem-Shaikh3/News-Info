
const main = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('form');
const home=document.getElementById('home');
const sports=document.getElementById('sports');
const coronaVirus=document.getElementById('coronaVirus');
var mytoken='15ab1e4277e47f5518ad40eda70048bd';
getNews()

function getNews() {
    fetch(`https://gnews.io/api/v4/top-headlines?&token=${mytoken}`)
        .then(response => response.json())
        .then(data => {


            let newshtml = '';
            let articles = data.articles;

            for (const key of articles) {
                // console.log(key);
                let news =
               ` <div class="mainNews">
                    <div class="news">
                        <img src="${key.image} alt="">
                    </div>
            
                     <div class="newsDescription">
                     <h3>${key.title}</h3>
                    <h3>Description</h3>
                    ${key.description}.
                    <a href="${key.url}" target="_blank">Read more here </a>
                     </div>
                </div>`

                console.log(news);
                newshtml += news;
            }
            main.innerHTML = newshtml;
        })

}

// sports news
function sportsnews(){
    fetch( `https://gnews.io/api/v4/search?q=Cricket&token=${mytoken}`)
    .then(response => response.json())
        .then(data => {

            let newshtml = '';
            let articles = data.articles;

            for (const key of articles) {
                // console.log(key);
                let news =
                    ` <div class="movie">
                             <img src="${key.image}" alt="">
                            <div class="movie-info">
                                 <h3>${key.title}</h3>
                             </div>
                            <div class="overview">
                                  <a href="${key.url}" target="_blank">Read more here </a>
                                  <h3>Description</h3>
                                  ${key.description}.
                           </div>
                   </div>`;
                newshtml += news;
            }

            // clear input search after submit
            document.getElementById('search').value='';
            main.innerHTML = newshtml;
        })
        
}

function coronavirusNews(){
    fetch(`https://gnews.io/api/v4/search?q=coronavirus&token=${mytoken}`)
    .then(response => response.json())
        .then(data => {

            let newshtml = '';
            let articles = data.articles;

            for (const key of articles) {
                // console.log(key);
                let news =
                    ` <div class="movie">
                             <img src="${key.image}" alt="">
                            <div class="movie-info">
                             <h3>${key.title}</h3>
                             </div>
                      <div class="overview">
                      <a href="${key.url}" target="_blank">Read more here </a>
                            <h3>Description</h3>
                             ${key.description}.
                     </div>
                   </div>`;
                newshtml += news;
            }

            // clear input search after submit
            document.getElementById('search').value='';
            main.innerHTML = newshtml;
        })

}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const seachTerm = search.value;
    console.log(seachTerm)
    

    fetch( ` https://gnews.io/api/v4/search?q=${seachTerm}&token=${mytoken}`)
    .then(response => response.json())
        .then(data => {

            let newshtml = '';
            let articles = data.articles;

            for (const key of articles) {
                // console.log(key);
                let news =
                    ` <div class="movie">
                             <img src="${key.image}" alt="">
                            <div class="movie-info">
                             <h3>${key.title}</h3>
                             </div>
                      <div class="overview">
                      <a href="${key.url}" target="_blank">Read more here </a>
                            <h3>Description</h3>
                             ${key.description}.
                     </div>
                   </div>`;
                newshtml += news;
            }

            // clear input search after submit
            document.getElementById('search').value='';
            main.innerHTML = newshtml;
        })
        })



        // Event Listner
        home.addEventListener('click',getNews)
        sports.addEventListener('click', sportsnews)
        coronaVirus.addEventListener('click',coronavirusNews)
