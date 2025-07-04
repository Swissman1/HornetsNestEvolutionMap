
var popData = {
  "1790": {
    "County": 11395,
    "City": null
  },
  "1800": {
    "County": 10439,
    "City": 122
  },
  "1810": {
    "County": 14472,
    "City": null
  },
  "1820": {
    "County": 16895,
    "City": null
  },
  "1830": {
    "County": 20073,
    "City": 717
  },
  "1840": {
    "County": 18273,
    "City": null
  },
  "1850": {
    "County": 13914,
    "City": 1065
  },
  "1860": {
    "County": 17374,
    "City": 2265
  },
  "1870": {
    "County": 24299,
    "City": 4473
  },
  "1880": {
    "County": 34175,
    "City": 7094
  },
  "1890": {
    "County": 42673,
    "City": 11557
  },
  "1900": {
    "County": 55268,
    "City": 18091
  },
  "1910": {
    "County": 67031,
    "City": 34014
  },
  "1920": {
    "County": 80695,
    "City": 46388
  },
  "1930": {
    "County": 127971,
    "City": 82675
  },
  "1940": {
    "County": 151826,
    "City": 100899
  },
  "1950": {
    "County": 197052,
    "City": 134042
  },
  "1960": {
    "County": 272111,
    "City": 201564
  },
  "1970": {
    "County": 354656,
    "City": 241420
  },
  "1980": {
    "County": 404270,
    "City": 315474
  },
  "1990": {
    "County": 511433,
    "City": 395934
  },
  "2000": {
    "County": 695454,
    "City": 540828
  },
  "2010": {
    "County": 919628,
    "City": 731424
  },
  "2020": {
    "County": 1115482,
    "City": 874579
  }
}

function getpopulationForYear(year){
    if(year<1790 || year <2030)
        return {"County": null, "City": null}
    if(year % 10 == 0){
        return popData[year];
    }
    
    throw Error("Not implemented");
}