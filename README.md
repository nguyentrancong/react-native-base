# react-native-base

### 1 Build project when initial

##### 1.1 Using TypeScript

    - if build new project
        npx react-native init MyApp --template react-native-template-typescript

    - Adding TypeScript to an Existing Project
        npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
        yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer

    ######### read more ==>> https://reactnative.dev/docs/typescript

##### 1.2 Build Structure project

    src
     | - assets
     | - components
     | - configures
     | - features
     | - navigation
     | - stores
     | - theme
     | - utils

##### 1.3 A series of entries which re-map imports to lookup locations relative to the 'baseUrl'

    - configure and add lib
        npm install --save-dev babel-plugin-module-resolver
        yarn add --dev babel-plugin-module-resolver

###### Note: To Do a Full Clean of a React Native Project

    watchman watch-del-all
    rm -rf yarn.lock package-lock.json node_modules
    rm -rf android/app/build
    rm ios/Pods ios/Podfile.lock
    rm -rf ~/Library/Developer/Xcode/DerivedData
    npm install && cd ios && pod update && cd ..
    npm start -- --reset-cache

## 2 React Navigation
