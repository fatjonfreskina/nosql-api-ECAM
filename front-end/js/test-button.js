var text = document.getElementById('text')
const getBtn = document.getElementById('getData')
const baseUrl = 'http://localhost:3000/api/workouts/getAllWorkouts'

getBtn.addEventListener('click', getInfo);
async function getInfo(e) {
    e.preventDefault();
    var res = await fetch(baseUrl,
        {
            method: 'GET'
        })
    var data = await res.json();
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    var tr1 = document.createElement('tr');
    var td11 = document.createElement('td');
    var td22 = document.createElement('td');
    var td33 = document.createElement('td');
    var td44 = document.createElement('td');
    var td55 = document.createElement('td');
    var td66 = document.createElement('td');
    var td77 = document.createElement('td');
    var textNode11 = document.createTextNode("name");
    var textNode22 = document.createTextNode("mode");
    var textNode33 = document.createTextNode("equipment");
    var textNode44 = document.createTextNode("exercices");
    var textNode55 = document.createTextNode("createdAt");
    var textNode66 = document.createTextNode("updatedAt");
    var textNode77 = document.createTextNode("workoutTime");
    td11.appendChild(textNode11)
    td22.appendChild(textNode22)
    td33.appendChild(textNode33)
    td44.appendChild(textNode44)
    td55.appendChild(textNode55)
    td66.appendChild(textNode66)
    td77.appendChild(textNode77)
    tr1.appendChild(td11)
    tr1.appendChild(td22)
    tr1.appendChild(td33)
    tr1.appendChild(td44)
    tr1.appendChild(td55)
    tr1.appendChild(td66)
    tr1.appendChild(td77)
    tbdy.appendChild(tr1);
    for(var i=0; i< data.length; i++){
        var tr = document.createElement('tr');
        var textNode = document.createTextNode(JSON.stringify(data[i].name));
        var textNode2 = document.createTextNode(JSON.stringify(data[i].mode));
        var textNode3 = document.createTextNode(JSON.stringify(data[i].equipment));
        var textNode4 = document.createTextNode(JSON.stringify(data[i].exercises));
        var textNode5 = document.createTextNode(JSON.stringify(data[i].createdAt));
        var textNode6 = document.createTextNode(JSON.stringify(data[i].updatedAt));
        var textNode7 = document.createTextNode(JSON.stringify(data[i].workoutTime));
        var td = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        td.appendChild(textNode)
        td2.appendChild(textNode2)
        td3.appendChild(textNode3)
        td4.appendChild(textNode4)
        td5.appendChild(textNode5)
        td6.appendChild(textNode6)
        td7.appendChild(textNode7)


        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tbdy.appendChild(tr);



        
 

    }
    tbl.appendChild(tbdy);
    document.body.appendChild(tbl); 
    

    }


