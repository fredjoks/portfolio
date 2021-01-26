---
title: 'PDF to Mass Mail'
date: '2021-01-26'
---
**This project was created for a friend to save approximately 6 hours of work on a monthly basis*
### Overview:
An unknown accounting program outputs **multiple page PDF** file,
which contains an invoice for every page.

It needs to be **split into single page PDF** files,
named after self contained apartment no.

Mailing list is then used to **send an email** to each
apartment owner. Each email includes apartment invoice
PDF as an attachment, assigned by mailing list.
### Client requirements ✔️✔️✔️
- [x] store split PDF files for possible later usage
- [x] ability to preview mails before sending
- [x] ability to modify each mail's body separately
- [x] option to send mails one by one
- [x] "send all" option
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