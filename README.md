Gift Hub
==================

<div align="left"> 
  <img src="client/src/images/lonely-boy.gif" alt="ace" width="200"/> </a> 
  <img src="client/src/images/gift1.gif" alt="ace" width="200"/> </a> 
<div>

Team "Partially blind and computer less" present our very own MakersBnb clone.\
A collaboration between [Suhani](https://github.com/suhani-zaman), [Hotu](https://github.com/ClaimingCookie5), [Blessing](https://github.com/BlessingUb), [Farya](https://github.com/Xfarya) & [Corinne](https://github.com/CorinneBosch)


## Airbnb Clone
Our first group project at Makers Academy, learning and implementing the following techniques

- Introduction to Active Record
- Agile Methology for user stories & domain modeling
- Feature and Unit testing
- GET / POST requests - defining routes
- Creating Tickets & using Trello

## Setup

1. **Fork** this [Bookmarker repository](https://github.com/CorinneBosch/gift-hub/) 
2. Then clone **your** fork to your computer.
3. Ensure you have `Ruby` and `rspec` installed. Check ruby version with `ruby -v`
4. Install bundler if you haven't already.
`gem install bundler`
5. Install the gems required by this repository.
`bundle install`

## Setup database

Before running the application on localhost, please migrate the database.\
If you wish to seed your db you can do so with the 2nd command.
```
rake db:migrate
rake db:seed
```

## Interact with the programme

Open the application in your directory with `rackup`

Direct in your browser to `http://localhost:9292`.\
Now you can register on MakersBnb and browse through all the lovely listings!

You can frature test and run the bookmarker program in any `code editor` or `IRB`. 

## Run test 

To test all units and features at once in your terminal.\
Print out the format documentation with the -fd shortcut.
```
$ rspec
$ rspec -fd
```

To test inividual unit or feature tests in your terminal:
```
$ rspec spec/units/user_spec.rb -fd
$ rspec spec/features/sign_in_spec.rb -fd
```

## User stories
Based on the objectives and expectations of our app we came up with the following user stories:

```
As a user
So that I may receive a gift from my friend
I would like to create an account on TBC.

~ (- sign-up page ~ username, email, password - database setup - verification - profile page)

As a friend
So that I may show my appreciation
I would like to be send a small gift to my friend.

~ (- profile page link (access to page) - button to make a donation - receive a message thanking friend for gift)
```




