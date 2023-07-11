http://localhost:3000/states/ 
###
http://localhost:3000/states/1/
###
post http://localhost:3000/districts/

{
  "districtName": "Bagalkot",
  "stateId": 3,
  "cases": 2323,
  "cured": 2000,
  "active": 315,
  "deaths": 8
} 
###
get http://localhost:3000/districts/10/
###
delete http://localhost:3000/districts/1/
###
put http://localhost:3000/districts/12/ 

{
  "districtName": "Nadia",
  "stateId": 3,
  "cases": 9628,
  "cured": 6524,
  "active": 3000,
  "deaths": 104
}
### 
get http://localhost:3000/states/1/stats/ 
###
get http://localhost:3000/districts/5/details/
###
post http://localhost:3000/districts/9/ 

{
  "districtName": "Nadia",
  "stateId": 3,
  "cases": 9628,
  "cured": 6524,
  "active": 3000,
  "deaths": 104
}