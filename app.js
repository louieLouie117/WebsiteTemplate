console.log('App.js');

//load all coompontes 
document.addEventListener('DOMContentLoaded', async() => {
    try {
        const header = document.getElementById('header');
        const aside = document.getElementById('aside');
        const main = document.getElementById('main');
        const footer = document.getElementById('footer');

        if(header && 
            aside && 
            main &&
            footer){
            //helper function for fetch and set html
            const fetchaAndSetHtml = async(url, targetDiv) => {
                const response = await fetch(url);
                const html = await response.text();
                targetDiv.innerHTML = html;
                console.log('fetched', url);
            }
            
           // arry with for fetch an promise
            const promises = [
                fetchaAndSetHtml('/componets/header.html', header),
                fetchaAndSetHtml('/componets/footer.html', footer),
                fetchaAndSetHtml('/componets/aside.html', aside),
                fetchaAndSetHtml('/componets/main.html', main)
            ];

            //wait for all promises to resolve
            await Promise.all(promises);
            
        }else{
            console.log('header not found');
        }
        
    } catch (error) {
        console.error(error);
        
    }
});