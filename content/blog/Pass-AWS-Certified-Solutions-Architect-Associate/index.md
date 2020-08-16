---
title: Pass Your AWS Certified Solutions Architect Associate Exam
date: "2019-03-08T08:12:03.284Z"
---
![AWS Certified Solutions Architect Associate Logo](AWS_Certified_Logo_SAA_294x230_Color.png)

Just last month on 2-20-2019 I passed my **AWS Certified Solutions Architect Associate** exam. 

This was accomplished with no prior AWS experience and only studying from January 5th thorough February 19th. I want to share the steps I took to pass as well as give you a few tips on what to expect when you go to take the exam. 

## How to Study for Your Exam

There are a few steps I took in order to study for the exam. Some of them do have cost associated, but if you are serious about passing your exam they are necessary. 

Also, most of what I used were tools from [A Cloud Guru](acloud.guru), but they are not a sponsor of this post. 

### 1. Complete AWS Certified Solutions Architect Associate Course on A Cloud Guru

[A Cloud Guru](acloud.guru) is an excellent training website that will help you to pass your exam. 

Following the training there was the biggest part of my preparation. The course consists of about 22 hours of video which is broken up into 135 lessons. 

Part of the videos are going to be labs, so expect it to take more than 22 hours to finish studying. I did not record the time I spent studying,but I would estimate I spent at least 60 hours total. 

You will find chapters which are broken up into lessons. Each lesson contains bite sized content of 20 mintues or less to do a lab or cover a concept. At the end of each chapter there will be a summary which is followed by a quiz. You definitely want to be able to get 100% on these quizzes before moving to the next chapter. 

You will want to finish all of the training and labs while getting 100% on the quizzes at the end of each chapter. After that you will want to go back and do the labs once again for the topics you are unsure about. 

In particular I would highly suggest going over the Load Balancer lessons a second time and make sure you understand everything load balancers can and cannot do. 

### 2. Review White Papers

For reviewing whitepapers there are only a couple that you need to worry about.

- [Architecting for the Cloud: AWS Best Practices](https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)
- [AWS Well-Architected Framework](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)

The AWS Well-Architected Framework is pretty long, as long as you know what the pillars are and understand the general idea behind them you will be fine.

### 3. Take Practice Exams with the Exam Simulator

After you finish the above steps you will want to use the [exam simularor](https://help.acloud.guru/hc/en-us/articles/115004506854-The-A-Cloud-Guru-Exam-Simulator-) for A Cloud Guru which simulates the AWS exam asking similar style questions. I took the exam simulator several times. 

Each time I took it, I would go back and complete the lessons, labs, and summary again for any area I was weak in. 

For example - if I got questions wrong that pertained to load balancers, I would go through that section of the course again. You can even do this for the domains that the test covers, see the demo of the exam simulator results below:

<iframe width="1280" height="720" src="https://www.youtube.com/embed/yQQYaWgSQiE?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I used the exam simulator until I go to the point I scored a 93, 88, 90, and 88. After reaching these scores I felt confident that I could pass the AWS Solutions Architect Associate exam. 

However, I will say even with this level of preparation and confidence I was caught off guard with the difficulty of the exam. 

That leads me into step 4, which I did not do, but I would highly suggest.

**Beware: The AWS exam is far more diffucult when it comes to questions about how to architect environments. Expect to do AT LEAST 10 points worse on the real exam.**

### 4. Pay for the AWS Practice Exam

When I went to sit for the exam a lot of the questions were much more complex than the ones in the exam simulator. If this is your first Associate level AWS exam,  I would highly suggest taking a practice exam. 

See the below question which can be found from the [sample questions](https://d1.awsstatic.com/training-and-certification/docs/AWS_Certified_Solutions_Architect_Associate_Sample_Questions.pdf) provided for this exam:

> **A web application allows customers to upload orders to an S3 bucket. The resulting Amazon S3 events trigger a Lambda function that inserts a message to an SQS queue. A single EC2 instance reads messages from the queue, processes them, and stores them in an DynamoDB table partitioned by unique order ID. Next month traffic is expected to increase by a factor of 10 and a Solutions Architect is reviewing the architecture for possible scaling problems.**
>
> **Which component is MOST likely to need re-architecting to be able to scale to accommodate the new traffic?**
>
> A. Lambda function
>
> B. SQS queue
>
> C. EC2 instance
>
> D. DynamoDB table

Because of questions like this, I highly suggest that you give the [practice exam](https://www.aws.training/certification?src=cert-prep) a shot. If I could go back and do it over again I would have taken a practice test to have an idea of what to expect. 

Why? You ask... Well finishing your exam with only 5 seconds left and about 12 flagged questions you never reviewed is not a good feeling. Still passed though. 😀

## Conclusion

In summary if you want to pass your AWS Certified Solutions Architect Associate exam, you should:

1. **Complete the course over at [A Cloud Guru](https://acloud.guru/)**
   1. Pass quizzes with 100%
   2. Do labs multiple times for concepts you struggle with
   3. Review summary lessons multiple times
2. **Review whitepapers**
   1. [Architecting for the Cloud: AWS Best Practices](https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)
   2. [AWS Well-Architected Framework](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf) - Focus on the pillars
3. **Take the [exam simulator](https://help.acloud.guru/hc/en-us/articles/115004506854-The-A-Cloud-Guru-Exam-Simulator-) over at A Cloud Guru.**
   1. Take it several times until you are consistently close to 90%
   2. For any domain you struggle with go back, review lessons, and do labs
4. **If it is your first AWS exam, pay for the [practice exam](https://www.aws.training/certification?src=cert-prep).**

I hope you guys found this helpful. There will be plenty of more content to come so stay tuned!