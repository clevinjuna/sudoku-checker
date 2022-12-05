const newDiv = document.createElement("div");

const table = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 7, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

initGrid();

function initGrid() {
    IdA = 1;

    table.forEach(element => {
        IdB = 1; 

        const newRow = document.createElement("tr");
        element.forEach(number => {
            const newInput = document.createElement("input");
            newInput.setAttribute("type", "number");
            newInput.style.height = "2%";
            newInput.style.width = "2%";
            newInput.style.textAlign = "center";
            newInput.id = "Number" + IdA + IdB;
            newInput.addEventListener('input', verifyGrid);

            if(number != 0){
                newInput.setAttribute("value", number);
                newInput.setAttribute("disabled", true);
            }
            newRow.appendChild(newInput);
            ++IdB;
        });
        newDiv.appendChild(newRow);
        element.id = "Row" + IdA;
        ++IdA;
    });
    document.body.appendChild(newDiv);
};

function verifyGrid(IdFocus) {
    CurrentSpot = IdFocus.srcElement.id;
    CurrentSpotChanging = document.getElementById(CurrentSpot);
    if((CurrentSpotChanging.value > 9) || (CurrentSpotChanging < 0)){
        CurrentSpotChanging.style.color = "red";
    } else {
        CurrentSpotChanging.style.color = "green";
    }
    row = CurrentSpotChanging.id.slice(6, -1);
    column = CurrentSpotChanging.id.slice(7);
    console.log(column);

    for(let i = 1; i < 10; i++) {
        if(i == column) {
            continue;
        }
        IdToSearchLine = "Number" + row + i;

        console.log(IdToSearchLine);
        CurrentSpotCheckingLine = document.getElementById(IdToSearchLine);
        console.log(CurrentSpotCheckingLine);
        if(CurrentSpotCheckingLine.value != CurrentSpotChanging.value) {
            for(let i = 1; i < 10; i++) {
                if(i == row) {
                    continue;
                }
                IdToSearchColumn = "Number" + i + column;
                console.log(IdToSearchColumn);
                CurrentSpotCheckingColumn = document.getElementById(IdToSearchColumn);
                console.log(CurrentSpotCheckingColumn);
                if(CurrentSpotCheckingColumn.value != CurrentSpotChanging.value) {
                    CurrentSpotChanging.style.color = "green";
                    
                } else {
                    CurrentSpotChanging.style.color = "red";
                    break;
                }
            }
        } else {
            CurrentSpotChanging.style.color = "red";
            break;
        }
    }
    // if (CurrentSpot == "Number" + 13) {
    //     document.body.style.backgroundColor = "blue";
    // }
}
