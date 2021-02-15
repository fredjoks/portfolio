---
title: 'PDF to Mass Mail'
repo: 'https://github.com/fredjoks/mass-mail'
live: ''
date: '2021-01-26'
---
**Personal project for a friend to save approximately 6 hours of work on monthly basis*
### Overview:
An unknown accounting program outputs **multiple page PDF** file,
which contains an invoice for every page.

It needs to be **split into single page PDF** files,
named after self contained apartment no.

Mailing list is then used to **send an email** to each
apartment owner. Each email includes apartment invoice
PDF as an attachment, assigned by mailing list.
### Client requirements
✔️ store split PDF files for possible later usage\
✔️ ability to preview mails before sending\
✔️ ability to modify mail's body before sending\
✔️ save sent mail in outbox  

### See it in action 🎬
1. **Select multiple page PDF** and **split** it into single-page PDFs  
<img src="/images/select-split.apng" alt="Home screen" style="margin: auto;" width='1000px'>  

2. **Modify** and **send** 
<img src="/images/modify-send.apng" alt="Home screen" style="margin: auto;" width='1000px'>

2. See the results 
<img src="/images/results.apng" alt="Home screen" style="margin: auto;" width='1000px'>

### What I learned:
I learned how to go from an **idea to a working solution**.
This project gave me good practice in **extracting data from filesystem**
using regex, os and PyPDF2 libraries.
Client appointments provided me with **fresh new insight** into
dealing with user behaviour and expectations.  
