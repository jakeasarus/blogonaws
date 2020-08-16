---
title: Terraform S3 Website Lab
date: "2020-08-16T16:08:03.284Z"
---

# Terraform AWS S3 Static Website Lab

Terraform can be a tough tool to learn on your own, even with all of the supporting documentation from Hashicorp. Sometimes people just need to see a tool in action and have visual steps to understand it. That is why I created this, so you can have the chance to follow just a few simple steps to create a Terraform module. 

Before you get started, this does get a little bit advanced, but I think you will be able to reverse engineer the steps taken to understand how everything works after the explainations. If not, you can always checkout [my course on Udemy](https://www.udemy.com/course/hashicorp-certified-terraform-associate/?couponCode=6A2C3DC1D7F20A87891E) to get the basics of Terraform down pat.

If you have any issues with code for the lab, you can [find my code here](https://github.com/jakeasarus/terraform/tree/master/s3-website).  

## Website Bucket

First things first, lets create our bucket. (you may want to view in fullscreen.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/PiDRzXZMFw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Bucket Policy

Second, it is time to create our bucket policy! (you may want to view in fullscreen.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/aRO3tapkpRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Cloudfront Distribution

Last, let's setup a cloudfront distribution! (you may want to view in fullscreen.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/_Jatd-qMqmc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Conclusion

By this point you should have successfully created your s3 bucket that has a policy that allows public access to read and the content should be deployed via cloudfront! Feel free to use this code for whatever you wish!

If you want to see more content like this feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/jacob-jones-60737289/)!