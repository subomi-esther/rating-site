const main = document.getElementById('main')
const successBox = document.getElementById('successBox')
const button = document.querySelectorAll('.btn')
const form = document.getElementById('form')
const selected = document.getElementById('selected')
const submitBtn = document.getElementById('submitBtn')


    button.forEach(btn => {  //first foreach to get each buttons
            btn.addEventListener('click', function(){   //each individual button listens for a  click
                button.forEach(btn => { // clicking another button changes it style back to initial
                    btn.style.backgroundColor = 'rgb(45, 53, 63)'
                  btn.style.color = '#959eacff';

                }
                
                )
                btn.style.backgroundColor = '#fb7413' // each click changes its style
                btn.style.color = '#121417'
                submitBtn.disabled = false
                form.addEventListener('submit', function(e) {
                    e.preventDefault()
                    console.log('submitted')
                    const rating = btn.value
                    selected.innerHTML = rating
                    successBox.hidden = false
                    main.hidden = true


    

   
                })

                
            }
        // and then all over again
        )




        
    });


