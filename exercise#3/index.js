const MedianNumber = 8
function CreatePyramid (n) {
    let i = 0, j = 0 , space = "", k = "";
    while (i < n) {
        space = "";
        k = "";
        for (j = 0; j < n - i; j++)
            space += "-";
        for (j = 0; j < 2 * i + 1; j++)
            k += "#";
        console.log(space + k + space);
        i++;
    }
}
CreatePyramid(MedianNumber)