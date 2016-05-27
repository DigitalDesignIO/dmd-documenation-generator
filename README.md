Digital Media Design Documenation Generator
===========================================

Simple web documentation generator for students of the Digital Media Design program


How to create a documentation
-----------------------------

* Download this repository
* Ceate a new folder somewhere on your harddrive e.g. `~/Desktop/my-documentation` (the documentation folder)
* Copy the following files and folders to your documentation folder `/content`, `index.html` and `lib`.
* Run a local webserver inside of the documentation folder, so that you can access it via your webbrowser e.g. on a mac open the Terminal app and type:

	```
	$ cd ~/Desktop/my-documentation
	$ python -m SimpleHTTPServer
	```
	The Documenation Generator is up and running! Go to `http://localhost:8000/`in your webbrowser to open it. Windows and Linux users please refer to this [tutorial](https://github.com/processing/p5.js/wiki/Local-server).

* Now you can add you content! Copy your images, p5.js sketches, video files ... to the `/content/` folder and edit `/content/structure.json` file. The example below generates a documentation with a single page inluding the contents of the files *1/title.txt*, *1/text.txt* and *1/1.png*.

	```
	{
		"course": "Programmiertes Entwerfen I",
		"semester": "Sommersemester 2015/16",
		"student": "M. Musterman, M. Musterfrau & Peter Pan",
		"teacher": "Prof. XYZ ABC",
		"school": "HS Ravensburg-Weingarten",
		"pages": {
			"1": [
				"title.txt",
				"text.txt",
				"1.png"
			]
		}
	}
	```

Supported media
---------------
* TITLE (page titles): `title.txt`
	If the title inside the file is prefixed with a TAB or SPACE charater, then the title will be rendered in the navigation as a seconday page
* TEXT (page main text): `text.txt`, main text of a sub page
basic [markdown](https://en.wikipedia.org/wiki/Markdown#Example) 
* IMAGE (image files): `.jpg`, `.jpeg`, `.gif`, `.png`, `.svg`
* CAPTION (image/p5 captions): `1.txt` to refer a caption text e.g. to the first image of the page
* P5 ([p5.js](http://p5js.org/) sketch files): `.js`
* VIDEO (video files): `.mp4`
* VIMEO (online videos): `.vimeo`, to embedd videos from vimeo add a `.vimeo` file with the following structure:  

	```
	{
		"id": 157991947,
		"width": 1920,
		"height": 1080
	}
	```  
	
	Where "id" is the vimeo ID of your video. Just copy the ID out of the URL (Your vimeo URL of the video should look similar to this: [https://vimeo.com/157991947](https://vimeo.com/157991947)).
	Width and height represent the resolution of your video.


TEXT and CAPTION, support basic [markdown](https://en.wikipedia.org/wiki/Markdown#Example) syntax, to add e.g. hyperlink, bold text, italic text ... to your text


