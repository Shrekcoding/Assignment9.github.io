let football = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const games = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let touchDown = {
                
                Date: document.getElementById('date').value,
                HomeTeam: document.getElementById('homeTeam').value,
                AwayTeam: document.getElementById('awayTeam').value,
                HomePoints: document.getElementById('homePoints').value,
                AwayPoints: document.getElementById('awayPoints').value,
              
            }
            football.push(touchDown);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {football} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(football, '\t', 2);

            //saving to localStorage
            localStorage.setItem('MytouchDownList', JSON.stringify(football) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', games);
        });