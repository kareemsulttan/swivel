// show password
const passInput = document.querySelectorAll('input[type="password"]');
const eyeImg = document.querySelector('.pass-eye img');
function showPass() {
  passInput.forEach((x) => {
    if (x.type === "password") {
      x.type = "text";
      eyeImg.src = "images/eye-show.png";
    } else {
      x.type = "password";
      eyeImg.src = "images/eye-hide.png";
    }
  })
};

/* Start SMS Code input logic */

const fieldset = document.querySelector(".validation");
const fields = document.querySelectorAll(".validation .form-control");

function handleInputField({ target }) {
  const value = target.value.slice(0, 1);
  target.value = value;

  const step = value ? 1 : -1;
  const fieldIndex = [...fields].findIndex((field) => field === target);
  const focusToIndex = fieldIndex + step;

  if (focusToIndex < 0 || focusToIndex >= fields.length) return;

  fields[focusToIndex].focus();

}
fields.forEach((field) => {
  field.addEventListener("input", handleInputField);
});

/* End SMS Code input logic */

// CUSTOM FILE NAME
$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".upload-file-text").addClass("selected").html(fileName);
});

$('.terms').on("click", function () {
  $('.terms-and-conditions').removeClass('d-none');
  $('.privacy-policy').addClass('d-none')
})
$('.privacy').on("click", function () {
  $('.terms-and-conditions').addClass('d-none');
  $('.privacy-policy').removeClass('d-none')
})

// active class link
const navLink = document.querySelectorAll("#sidebar .nav-item .nav-link");
for (let i = 0, length = navLink.length; i < length; i++) {
  navLink[i].onclick = function () {
    const navActive = document.querySelector("#sidebar .nav-item .nav-link.active");
    if (navActive) navActive.classList.remove("active");
    this.classList.add('active');
  };
}

// change close btn img
function chngimg() {
  var img = document.getElementById('nav-open').src;
  if (img.indexOf('hamburger.png') != -1) {
    document.getElementById('nav-open').src = 'images/close.png';
  }
  else {
    document.getElementById('nav-open').src = 'images/hamburger.png';
  }
}

$('.nav-close-btn').on('click', function () {
  $('#sidebar').toggleClass('expand');
  $('#app-body').toggleClass('app-body-collapse');
});

$(".job-type ul li").on('click', function () {
  $(this).siblings().removeClass('active');
  $(this).addClass('active')
})

/*UPLOAD VIDEO*/

const INPUT_FILE = document.querySelector('#upload-files');
const INPUT_CONTAINER = document.querySelector('#upload-container');
const FILES_LIST_CONTAINER = document.querySelector('#files-list-container');
const FILE_LIST = [];
let UPLOADED_FILES = [];

const multipleEvents = (element, eventNames, listener) => {
  const events = eventNames.split(' ');

  events.forEach(event => {
    element.addEventListener(event, listener, false);
  });
};

const previewImages = () => {
  FILES_LIST_CONTAINER.innerHTML = '';
  if (FILE_LIST.length > 0) {
    FILE_LIST.forEach((addedFile, index) => {
      const content = `
      <li class="form__image-container js-remove-image mb-3 flex-center-vh justify-content-start" data-index="${index}">
      <div class="uploaded-video">
       <video width="100%" height="100%" style="pointer-events: none;">
        <source src="${addedFile.url}" type="video/mp4" alt="${addedFile.name}">
        Your browser does not support HTML video.
      </video>
      </div>
      <div class="upload-bar ml-4">
        <h4 class="fs14 text-secondary">${addedFile.name}</h4>
      </div>
      </li>
    `;

      FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
    });
  } else {
    console.log('empty');
    INPUT_FILE.value = "";
  }
};

const fileUpload = () => {
  if (FILES_LIST_CONTAINER) {
    multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
      INPUT_CONTAINER.classList.add('active');
    });

    multipleEvents(INPUT_FILE, 'dragleave dragend drop change blur', () => {
      INPUT_CONTAINER.classList.remove('active');
    });

    INPUT_FILE.addEventListener('change', () => {
      const files = [...INPUT_FILE.files];
      console.log("changed");
      files.forEach(file => {
        const fileURL = URL.createObjectURL(file);
        const fileName = file.name;
        if (!file.type.match("video/")) {
          alert(file.name + " is not an video");
          console.log(file.type);
        } else {
          const uploadedFiles = {
            name: fileName,
            url: fileURL
          };


          FILE_LIST.push(uploadedFiles);
        }
      });

      console.log(FILE_LIST); //final list of uploaded files
      previewImages();
      UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
      removeFile();
    });
  }
};

const removeFile = () => {
  UPLOADED_FILES = document.querySelectorAll(".js-remove-image");

  if (UPLOADED_FILES) {
    UPLOADED_FILES.forEach(image => {
      image.addEventListener('click', function () {
        const fileIndex = this.getAttribute('data-index');

        FILE_LIST.splice(fileIndex, 1);
        previewImages();
        removeFile();
      });
    });
  } else {
    [...INPUT_FILE.files] = [];
  }
};

fileUpload();
removeFile();

/**
 * CHART JS
 */
var charts = document.getElementsByClassName('chart')
for (chart of charts) {
  var ctx = chart.getContext('2d');
  gradient = ctx.createLinearGradient(0, 0, 0, 50);
  gradient.addColorStop(0, 'rgba(240, 113, 103, 0.5)');
  gradient.addColorStop(0.5, 'rgba(240, 113, 103, 0.25)');
  gradient.addColorStop(1, 'rgba(240, 113, 103, 0)');
  var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Custom Label Name',
      backgroundColor: gradient,
      pointBackgroundColor: 'white',
      borderWidth: 6,
      borderColor: '#F07167',
      data: [50, 55, 65, 56, 54, 50]
    }]
  };
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(200, 200, 200, 0)',
          lineWidth: 5,
          display: false,
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(200, 200, 200, 0)',
          lineWidth: 5,
          display: false
        },
        ticks: {
          display: false
        }
      }]
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0
      }
    },
    legend: {
      display: false
    },
    point: {
      radius: 0
    },
    tooltips: {
      backgroundColor: 'rgba(0,0,0,0.3)',
      titleFontColor: 'red',
      caretSize: 5,
      cornerRadius: 2,
      xPadding: 10,
      yPadding: 10
    }
  };
  var chartInstance = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}

// set the dropdown menu width as the search input width
const candidateSearch = document.querySelector('.candidate-search .form-group');
const candidateSearchWidth = candidateSearch.offsetWidth;
const candidatedropDown = document.querySelector('.candidate-search .form-group .dropdown .dropdown-menu');
candidatedropDown.style.width = candidateSearchWidth + "px";

// play video on click
const candidateVideo = document.querySelectorAll('.candidate-video-container');
candidateVideo.forEach(function (c) {
  const playVideo = c.querySelector('.tab-video');
  const playBtn = c.querySelector('.play-video');
  playVideo.onended = function() {
    playBtn.style.display = "block"
  }
  playBtn.addEventListener('click', function () {
    if (playVideo.paused === false) {
      playVideo.pause();
      playBtn.style.display = "block"
    } else {
      playVideo.play();
      playBtn.style.display = "none"
    } 
    playVideo.addEventListener('click',function(){
      if(this.paused === false){
        this.pause();
        playBtn.style.display = "block"
        console.log("works")
      }
    })
  })
})


