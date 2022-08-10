var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["num"] = document.getElementById("num").value;
    formData["up"] = document.getElementById("up").value;
    formData["down"] = document.getElementById("down").value;
    formData["hit"] = document.getElementById("hit").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.num;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.up;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.down;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.hit
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("num").value = selectedRow.cells[1].innerHTML;
    document.getElementById("up").value = selectedRow.cells[2].innerHTML;
    document.getElementById("down").value = selectedRow.cells[3].innerHTML;
    document.getElementById("hit").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.num;
    selectedRow.cells[2].innerHTML = formData.up;
    selectedRow.cells[3].innerHTML = formData.down;
    selectedRow.cells[4].innerHTML = formData.hit;

}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("num").value = '';
    document.getElementById("up").value = '';
    document.getElementById("down").value = '';
    document.getElementById("hit").value = '';
    selectedRow = null;
}