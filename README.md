# Hack Your Health

### By Noel Kirkland - 10/7/2020

•[](#1)<br>
•[](#2)<br>
•[](#3)<br>
•[](#4)<br>
•[](#5)<br>
•[](#6)

<!-- copy and paste. Modify height and width if desired. -->
<iframe class="embeddedObject shadow resizable" name="embedded_content" scrolling="no" frameborder="0" type="text/html" 
        style="overflow:hidden;" src="https://www.screencast.com/users/NoelKirkland9269/folders/Capture/media/d27e6a0a-72a1-4ab4-a038-63efb544e002/embed" height="760" width="1396" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Description

Hack your Health is an application that will help user's take charge of their mental health. The user will create calendars of all the things that they think would improve their mental health (e.g., exercise, meditation, social time, etc...) and enter the times they would like to do those activities. At the end of each day the user will fill out a personal inventory form that rates their mood (e.g., happiness, connectedness, piece of mind, etc...). The app will then compare all of the data and give digestible information on what activities are most beneficial to them. For example, let's say that the user has chosen meditation, yoga, and hiking as their chosen calendars. They add events for each of these calendars to their schedule and at the end of three weeks they have clocked 5 hours of meditation (20 minutes 5x per week for 3 weeks), 4.5 hours of yoga (30 minutes 3x per week for 3 weeks), and 2 hours of hiking (1 hour once a week for three weeks but they had to miss it one week). The user has also been rating daily inventory questions every night. Questions like, "how happy are you feeling today?", "how stressed are you feeling today?", "How is your depression today?". At the end of the three weeks they are left with comprehensive data about how these good things that they have chosen to do for themselves are actually affecting their mood in real time.

## Components

This is a list of all of the components I will need to complete my application:

* ViewControl (only class component)

* HomePage

* authentication:
    * SignUp
    * SignIn

* calendar
    * Calendar
    * CalendarType
    * ReusableCalendarTypeForm
    * NewCalendarTypeForm
    * EditCalendarTypeForm

* daily inventory:
    * DailyInventory
    * DailyInventoryList
    * ReusableDailyInventoryForm
    * NewDailyInventoryForm
    * EditDailyInventoryForm
    * Response
    * ResponseList

* returned data
    * MoodData

## Component tree diagram

#### First draft:
<hr/>

![](hack-your-health-component-tree-draft1.png)
<hr/>

#### Second draft:
<hr/>

![](hack-your-health-component-tree-draft2.png)
<hr/>


## Commands I have used so far

npm create-react-app hack-your-health

npm install

npm install firebase

npm install react-redux-firebase redux-firestore

npm install redux

npm install react-router-dom

npm install react-redux

npm install styled-components

npm install react-bootstrap bootstrap

## Production flow

1. create ViewControl

2. create HomePage

3. create SignIn and SignUp components and make sure they are working correctly

4. create all components in daily-inventory directory and integrate redux

5. create all components in calendar directory

6. style and polish

7. make sure readme is all up to date and polished

8. create demonstration video and get pitch down

## Known bugs

Currently, the calendar half of my application has yet to be built out. Right now the user can create/edit/delete multiple daily inventory forms, fill out their custom forms and view their responses.
Once the calendar components have been built out I can use the data collected to create the MoodData component.

## Support and Contact Details

If there are any issues or questions contact me at noelkirkland@gmail.com

## Technologies Used <a name="5"></a>

* Javascript
* React
* React-Redux
* Firestore
* React-Bootstrap & Styled Components
* HTML & CSS
* Markdown

### License

`*` This project uses the following license: [MIT](https://opensource.org/licenses/MIT)

Intellectual property of Noel R. Kirkland - 2020