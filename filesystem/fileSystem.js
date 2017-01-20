/**
 * Created by Boaz on 19/01/2017.
 */
const readlineSync = require('readline-sync');
var exit = false;
var outerIndex = 0;
var innerIndex = 0;
var uniqueID = 0;
var path = 'root:/';
var level = 0;//level distance from root

var storage = [//basic folder system
    /*[id, parentID , whatAmI?, content===NULL]*/
    [0,0,'root(i\'m the son of myself)'],
    [1,0,'subfolder1'],
    [2,0,'subfolder2'],
    [3,0,'subfolder3'],
    [4,1,'subfolder4'],
    [5,4,'subfolder5' ],
    [6,5,'file1.txt','content'],
    [7,5,'file2.txt','content']
];
console.log(path);

var menu = [//user menu
    ' Print Current folder.',
    ' Change(go back or forward) ',
    ' Create file or folder',
    ' Open file',
    ' Delete file',
    ' Exit(suit yourself out from the program)'
];

//console.log(fsStorage[0][2] + " >");
    console.log(path);
while (!exit){

        showMenu();
}

            function showMenu() {
                var userMenuInput = readlineSync.keyInSelect(menu, 'Chose your menu option(1 to 6):');
                userMenuInput++;
                switch (userMenuInput){//calling functions according to user menu input
                    case 1 :
                        printUnderRoot();
                        break;
                    case 2 :
                        changeDirectory();

                        break;
                    case 3 :
                        break;
                    case 4 :
                        break;
                    case 5 :
                        break;
                    case 6 :
                        exitProgram();
                        break;

                    default:
                        console.log("What is wrong with you?? chose menu item between 1 to 6");

                }
            }

            function exitProgram() {
                var exitProgram = readlineSync.question("Are you sure you want to exit? (y / n)");
                if(exitProgram.toLowerCase() === 'y'){
                    exit = true;
                    process.exit();
                }else if(exitProgram.toLowerCase() === 'n' ){
                    showMenu();
                }
            }

            function printUnderRoot() {
                var numOfFiles = 0;
                console.log(path);
                for(var i = 0 ; i < storage.length ; i++){
                    if(storage[i][1] === uniqueID && storage[i][0] !== uniqueID){
                        console.log("  " + storage[i][2]);
                        numOfFiles++;
                    }

                }
                console.log("number of files: " + numOfFiles+".");

                // if(uniqueID === 0){
                //     console.log(path);
                // }else{
                //     console.log(path+);
                // }
                // // for(var i = 0; i < storage.length ; i++){
                // //     if (uniqueID === storage[i][0]){
                // //         console.log(path+""+storage[i][2] );
                // //     }
                // //
                // // }

            }

            function changeDirectory(){
                var userInput = readlineSync.question("Where would you like to go?");
                if(userInput === '..'){
                    console.log(level);
                    if(uniqueID > 0){
                        console.log("test");
                        uniqueID = storage[uniqueID][1];
                        var arr = path.slice('/');
                        console.log(arr);
                        level--;


                    }else{
                        console.log("You are in the root , no where to go back");
                    }
                }else if(!checkIfFolderExist(userInput)) {
                    console.log("No directory called " + userInput);
                }

            }

            function checkIfFolderExist(folderName) {
                for(var i = 0 ; i < storage.length ; i++){
                   if(folderName === storage[i][2] && uniqueID === storage[i][1]){
                       path += "/" + folderName;
                       uniqueID = storage[i][0] ;
                       level++;
                       console.log(path);
                       return true;
                   }
                }
                return false;
            }