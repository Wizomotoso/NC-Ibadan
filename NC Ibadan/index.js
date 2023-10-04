loader();

// document.querySelector('.btn').onclick = loader;

/*====================================
*     LOADER
======================================*/
const btn = document.querySelector("#launch-screen .btn");

function loader(_success) {
    var obj = document.querySelector('.preloader'),
    inner = document.querySelector('.preloader_inner');
    var w = 0,
        t = setInterval(function() {
            w = w + 1;
            inner.textContent = w+'%';
            if (w === 100){
                clearInterval(t);
                w = 0;
                inner.textContent="";
                btn.classList.remove("hidden");
                btn.classList.add("visible");
                if (_success){
                    return _success();
                }
            }
        }, 80);

        

}
