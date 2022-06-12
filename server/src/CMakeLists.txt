# Flags of Cmake
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Werror -std=c++20 -fsized-deallocation")

# Qt configs
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Find all the libs


# Add all files
file(GLOB_RECURSE SOURCE_FILES true "./*.cpp" "./*.h")

# Var PROJECT_SOURCES
set(PROJECT_SOURCES ${SOURCE_FILES})

# Copying Files
#add_custom_target(COPY_IMAGES)
#add_custom_command(

add_executable(${CMAKE_PROJECT_NAME}
        ${PROJECT_SOURCES}
        )


#target_link_libraries(${CMAKE_PROJECT_NAME} PRIVATE Qt${QT_VERSION_MAJOR}::Widgets)
