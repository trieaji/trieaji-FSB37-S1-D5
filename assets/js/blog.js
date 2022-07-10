let dataBlog = []
console.log(dataBlog);

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById('input-title').value
    let startDate = document.getElementById('input-startDate').value
    let endDate = document.getElementById('input-endDate').value
    let description = document.getElementById('input-description').value
    let technologis1 = document.getElementById('input-technologis1').checked
    let technologis2 = document.getElementById('input-technologis2').checked
    let technologis3 = document.getElementById('input-technologis3').checked
    let technologis4 = document.getElementById('input-technologis4').checked
    let image = document.getElementById('input-image').files

    image = URL.createObjectURL(image[0])

    //kondisi untuk checkbox (checked)
    if (technologis1) {
        technologis1 = document.getElementById('input-technologis1').value
    } else {
        technologis1 = 'Belum dicentang'
    }

    if (technologis2) {
        technologis2 = document.getElementById('input-technologis2').value
    } else {
        technologis2 = 'Belum dicentang'
    }

    if (technologis3) {
        technologis3 = document.getElementById('input-technologis3').value
    } else {
        technologis3 = 'Belum dicentang'
    }

    if (technologis4) {
        technologis4 = document.getElementById('input-technologis4').value
    } else {
        technologis4 = 'Belum dicentang'
    }
    //kondisi untuk checkbox (checked)

    let project = {
        title,
        posAt: new Date(startDate),
        posAt2: new Date(endDate),
        description,
        technologis1,
        technologis2,
        technologis3,
        technologis4,
        image
    }

    dataBlog.push(project)
    console.log(dataBlog)

    renderProject()
}

function renderProject() {
    document.getElementById('listProject').innerHTML = ''

    for(let i = 0; i < dataBlog.length; i++){
        document.getElementById('listProject').innerHTML += 
        `
            <div class="project-list-item">
                <div class="project-image">
                    <img src="${dataBlog[i].image}" alt="">
                </div>
                <div class="project-content" >
                    <h2>
                        <a href="myproject-detail.html" target="_blank">
                            ${dataBlog[i].title}
                        </a>
                    </h2>
                    <div class="duration-project">
                        <p>Durasi: <span> ${getDistanceTime(dataBlog[i].posAt,dataBlog[i].posAt2)} </span></p>
                    </div>
                    <div class="description-project">
                        <p>
                            ${dataBlog[i].description}
                        </p>
                    </div>
                    <div class="technologis-project">
                        <i class="fa-brands fa-${dataBlog[i].technologis1}"></i>
                        <i class="fa-brands fa-${dataBlog[i].technologis2}"></i>
                        <i class="fa-brands fa-${dataBlog[i].technologis3}"></i>
                        <i class="fa-brands fa-${dataBlog[i].technologis4}"></i>
                    </div>
                    <div class="btn-group">
                        <div class="btn-left">
                            <button>Edit</button>
                        </div>
                        <div class="btn-right">
                            <button class="del-btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div> 
        `
    }
}


/* function getFullTime(waktu) {
    let month = ["Januari","Febuari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    let date = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31",
    ];

    let dateIndex = waktu.getDate();
    let monthIndex = waktu.getMonth();
    let year = waktu.getFullYear();

    let fullTime = `${date[dateIndex]} ${month[monthIndex]} ${year}`;
    return fullTime;
} */

function getDistanceTime(readyDate, finishDate) {
    /* let start = new Date(readyDate);
    let end = new Date(finishDate); */
    let start = readyDate;
    let end = finishDate;
    

    if(start > end) {
        return alert('Error')
    } else if (start < end) {
        let getTime = new Date (end - start); // kalau start - end maka layaknya kita seorang indigo, karena kita gk tau selesainya kita itu kapan??
    

    let miliseconds = 1000
    let secondInMinutes = 60
    let minuteInHour = 60
    let secondInHour = secondInMinutes * minuteInHour // 3600
    let hourInDay = 24
    let minuteInDay = minuteInHour * hourInDay // 1380
    let secondInDay = minuteInDay * secondInMinutes //82800 detik
    

    let distanceDay = getTime / (miliseconds * secondInHour * hourInDay);
    console.log(distanceDay);
    distanceDay = Math.floor(getTime / (miliseconds * secondInHour * hourInDay));
    console.log(distanceDay);
    let distanceMonth = (distanceDay / 31);
    console.log(distanceMonth);
    distanceMonth = Math.floor(distanceDay / 31);
    console.log(distanceMonth);


    let duration = '';
    if(distanceMonth <= 0) {   // jika belum mendapatkan 1 maka akan mendapatkan hari
        duration = distanceDay + ' Hari  '
        return duration
    } else {
        duration = distanceMonth + ' Bulan '
        return duration
    }

}
    
}  
//getDistanceTime(startDate, finishDate)
