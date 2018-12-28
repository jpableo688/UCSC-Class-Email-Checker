

# UCSC Class Checker
- This quick Express application is primarily used to constantly check (every 5 minutes) to see if a spot on the course roster becomes available (before a waitlisting into the class becomes available).
- Once a spot becomes available, this application will send an email to whoever (including yourself) to notify whoever that the course roster spot has become available.
- Can be hosted locally or run on a cloud hosting site.

## Usage
To start this program enter the command:

-  ``` node index.js```

## How This Works
- This application is purposed to be run in a terminal like environment.
   
   Once the program has been started it will continuously make requests every 5 minutes to the API (more details on API below)    to check the available seats count and whether if there is an open seat available. If the program evaluates that there is      an open roster spot available then the program will send an email then break the program. 
   
- As a sanity check to make sure that the program is actually running, I have put in print statements to print ```false``` each time the program makes a new API request and evaluates that there are still no open spots available.

## API Details
- Firstly I would give a special thanks to the developer(s) from ```slugsurvival.com``` who(m) provided many with the sweet API endpoints to provide data from the UCSC registrar.

- I have left an example of a class that I was checking to see if a spot has opened up in ```index.js```. The formatting of the API goes as follows (is also in the documentation in SlugSurvival as well):
```
** Enrollment: Course **
https://andromeda.miragespace.net/slugsurvival/tracking/latestOne?termId=:termCode&courseNum=:courseNum
if you only want the latest one.

** Otherwise, **
https://andromeda.miragespace.net/slugsurvival/tracking/fetch?termId=:termCode&courseNum=:courseNum
will return full enrollment changes. Optional parameter period will return changes only in the last X seconds.

```

Of course you could also get the API from the network console once you make a request on the SlugSurvival website.

## Acknowledgements 
- Developer(s) from ```https://slugsurvival.com/```
- [SlugSurvival Open Source Documentation](https://slugsurvival.com/explain/opensource)
