# code-test-victorYeung
This is a code test for myself testing my front-end knowledge 

I found out that i have no idea how to do <br />
So i decide to write down all the step and try to figure out step by step

the thinking:
1. Learn how to Call API and get the data correctly from omdbapi.com (which Way? fetch promise ?)
2. understand the endPoint structure of an API. 
3. understand the paramether of API 
4. understand the verification of API 
5. try to retrive the correct data from API by combine the endpoint with type parameter(use console.log to check the data)
6. try to destucture the data 
7. try to display the data on the screen 


the Challenge :
1. have difficulty on try to display both Movie + TV with 3 name <br />
2. have difficulty on bold the userInput in the movie name <br />

solution to challenge 2 : <br />
https://stackoverflow.com/questions/29896907/bold-part-of-string <br />
this might help for me to bold the userInput part of the movie  <br />
function boldString(str, substr) { <br />
  var strRegExp = new RegExp(substr, 'g'); <br />
  let boldName = str.replace(strRegExp, '<b>' + substr + '</b>'); <br />
  return boldName; <br />
}
