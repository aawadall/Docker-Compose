FROM microsoft/dotnet:sdk AS build-env
WORKDIR /app

COPY app/*.csproj ./
RUN dotnet restore 

COPY . ./

FROM microsoft/dotnet:aspnetcore-runtime 
WORKDIR /app
COPY --from=build-env /app .
ENTRYPOINT ["dotnet", "aspnetapp.dll"]