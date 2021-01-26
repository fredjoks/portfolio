---
title: 'PDF to Mass Mail'
link: 'https://github.com/fredjoks/mass-mail'
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
![Home screen](/images/homescreen.png)
  
2. **Select file** to work with
![Select PDF file](/images/selectfile.gif)
3. **Split file** into single page PDFs
![Split file into single page PDFs](/images/split.gif)
4. Create mail **preview**
![Create mail preview](/images/preview.gif)
5. **Modify** mail and **send one by one**
![Modify mail and send one by one](/images/onebyone.gif)
6. **Send all**
![Send all](/images/sendall.gif)
7. See the results! ✨
![Result](/images/result.gif)