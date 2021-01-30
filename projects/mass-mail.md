---
title: 'PDF to Mass Mail'
repo: 'https://github.com/fredjoks/mass-mail'
live: ''
date: '2021-01-26'
---
**This project was made for a friend to save approximately 6 hours of work on monthly basis*
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
✔️ option to confirm mails one by one\
✔️ "send all" button
### See it in action 🎬
1. `$ python app.py`  
`$ Type your password and presss enter: `
<img src="/images/homescreen.png" alt="Home screen" style="margin: auto;" width='800px'>

2. **Select file** to work with
<img src="/images/selectfile.gif" alt="Select PDF file" style="margin: auto;" width='800px'>

3. **Split file** into single page PDFs
<img src="/images/split.gif" alt="Split file into single page PDFs" style="margin: auto;" width='800px'>

4. Create mail **preview**
<img src="/images/preview.gif" alt="Create mail preview" style="margin: auto;" width='800px'>

5. **Modify** mail and **send one by one**
<img src="/images/onebyone.gif" alt="Modify mail and send one by one" style="margin: auto;" width='800px'>

6. **Send all**
<img src="/images/sendall.gif" alt="Send all" style="margin: auto;" width='800px'>

7. See the results! ✨
<img src="/images/result.gif" alt="Results" style="margin: auto;" width='100%'>

### What I learned:
I learned how to go from an **idea to a working solution**.
This project gave me good practice in **extracting data from filesystem**
using regex, os and PyPDF2 libraries.
Client appointments provided me with **fresh new insight** into
dealing with user behaviour and expectations.