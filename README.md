# A journey through space with hubble and the flickr API

#Problem
This project was an exploration with the Flickr API.  The goal was to create a feed of images from the NASA Flickr API in under 4 hours. I decided to create a website that represents a "Journey Through Space with the Hubble Telescope".  

#User Stories
- User must be able to view all images from NASA related to the Hubble Telescope
- User must be able to view images on any device/browser (within the past two versions)

#Use Cases
- AJAX request to Flickr API to recieve JSON object of all photo information
- Filter photo information to show just the images that had "hubble" in the caption
- Display results as background images so they function with a responsive layout
- Design a layout that represents the idea of exploration (easily scrollable)
- Implement Sass grid mixin to structure layout
- Implement responsive design using media queries
- Implement responsive navigation for small devices
- Styling of webpage using Sass

#Design Decisions
For this project I made a few design decisions that I think work well with the idea behind the journey a person can take through photos. 

- First, I decided to use the IBM Design Language.  The IBM Design Language does a great job using design to focus on user experience and content.  I felt this description resonated with this project:

```
  Does the visual design enhance people’s understanding of how the world works? 
  Is it purposeful in its intent? 
  Does it help users see the world in a new way—from a clearer perspective?
  
```
  Both IBM and NASA have the same goals with different routes of getting there.  I think it was important to use a language that represented the NASA mission and vision accurately.
- I also desiged the layout as a one-page scroll. Because all of the images are of equal importance, I though having a scroll would really allow users to get lost in the imagery and captions, to explore them, and to learn more about the hubble telescope missions.

#Challenges
- One of the challenges for this project was making the photo feed cross-browser compatible.  Originally I started by using fetch for the AJAX request, but after doing some research, I found that it wasn't compatible with the latest versions of Safari and IE.  I decided instead to us the XMLHttpRequest since it is more widely accepted across browsers.
- Building a Sass grid mixin that fit the structure and layout of the site.

#Follow up
Since I only had 4 hours to complete this project, there are a few things I would do if I had more time:
- Add more advanced search/filtering.  I'd like to add search such that a user can search for a word and any images from that search will show up to create an individual, dynamic "journey" page for that topic
- Details/Commenting.  I'd like to include an option to click into an image to get more details and also be able to comment on that image
- More advanced responsive menu.  For the sake of time, and because I only had 2 links in my navigation, the responsive menu doesn't exactly mirror that of the IBM design language.  I'd like to go back and implement an off-canvas style menu to better match what IBM has on their site.








