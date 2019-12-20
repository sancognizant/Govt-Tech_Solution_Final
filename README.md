## Side-Note: Why Typescript is chosen over Javascript for the assignment ?
```
1. Typescript is strongly typed. There is type safety and type checks will be done during compile time. This feature is not present in Javascript 

2. It is easier for other developers reading the code, to have an idea on what the code does, by looking at the types alone. 

3. Typescript is a superset of Javascript.  Features of Javascript (ES6) is available to Typescript. 

```


## To Start application 

```
npm install - to install all necessary dependencies
npm run start 

```

## Expected output

```
\Govt-Tech-solution-Final\build\checkForKeyWord.js
\Govt-Tech-solution-Final\build\path\to\your\dir\somedir\somemodule\somefile.js
\Govt-Tech-solution-Final\build\path\to\your\dir\somedir\somemodule\someotherfile.js
\Govt-Tech-solution-Final\build\path\to\your\dir\somedir2\anotherdir\index.js
\Govt-Tech-solution-Final\build\path\to\your\dir\somedir2\anotherdir\yet_another_dir\index.js
\Govt-Tech-solution-Final\build\path\to\your\dir\somedir2\index.js
\Govt-Tech-solution-Final\build\Test\appTest.js
\Govt-Tech-solution-Final\build\Test\sampleTestDir2\sampleTestIndex2.js
```

## To Start Test cases 
```
npm run test

```

## Expected Test Case results 

```
  Test to see if there are 3 files within Test Folder
    √ retrieve all files from Test folder

  Test to see if the file indexTest.js and sampleTestIndex2.js is within the Test Folder
    √ retrieve all files from directory

  Test to show that there are less than 5 files in total
    √ retrieve all files from directory

  Test to show that TODO exist within sampleTestIndex2.ts
    √ check if file contains TODO

  Test to show that TODO does not exist within indexTest.ts
    √ check if file contains TODO

```