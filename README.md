# Stock Wish List
The Stock Wish List is a project that allows the user to keep track of the stocks that they are looking to buy. It aims to let the user enter in the details of the company they want to invest in and enter in the due-diligence that they have done on the company. Finally, the user can remove a stock from their wish list if they end up buying the stock or decide that they no longer want to invest in it. 

## Technologies Used 
* Front end- React
* Back end - C#
* Runtime - .NET Core 3.1
* Design Components - Shopify Polaris
* Image Storage - Google Firebase

## Requirements 
* [Visual Studio 2019](https://visualstudio.microsoft.com/downloads/) (optional but recommended)
* [.NET Core 3.1 Runtime](https://dotnet.microsoft.com/download/dotnet-core/3.1) (only required if you do not wish to install Visual Studio)

## Running the Application (Method 1: Recommended)
The easiest and quickest way to get this application running is by opening the [solution file](StockWishlist.sln) in Visual Studio 2019. You can do this by simply double clicking the solution file and opening it in Visual Studio when prompted. You can also open up Visual Studio first, go to **File->Open->Project/Solution** and navigate to the solution file from there. This will load the entire application and all of its contents in the IDE. Now, you can simply navigate to **Debug->Start Debugging** and the application should start up automatically. 

## Running the Application (Method 2)
The second way that you can start this application is by using the command line. Use the following commands starting from the root repository to run the application. Note that you will need to the .NET Core 3.1 runtime installed to start the application using this method: 

```bash
cd StockWishlist/ # change directory to project folder
dotnet run # build and run the application
```
The output pane will give you two URLs where the application is being hosted on your local machine. It is highly recommended you use the link beginning with *https://* 

## Important endpoints
* **/** - landing page of the application
* **/swagger** - the swagger documentation for the API
* **/api/wishlist** - the endpoint where all the API requests for this application are made

# Documentation
I created a notion page in which I include a demo of the application. You can access it [here](https://www.notion.so/Stock-Wish-List-Project-Documentation-45a6a71f514f4a7da34fa1ab0cf15f45)!
