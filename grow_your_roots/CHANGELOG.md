# Changelog
All noteable changes to the project are noted in this file

# [Unreleased]

# [1.5.0] 11-09-2022
# Added
- Log in and registration functionality.
- Accompanying authentication to determine if a user exists or not.
- ProtectedRoutes to the user page so that a user cannot access this page until they are logged in.
- Log out functionality from the user page and the home page when the user is logged in.

# Changed
- Changed the navigation buttons on the user page to navigate to the home page and allow the user to log out.
- Changed the navigation buttons on the home page only if the user is already logged in.

# Removed


# Bugs
- Navigation between home and user pages after the user logs in was not working because user was losing authentication every time they navigated.
- Added a work around by re-authenticating the user if they are navigating betweeen pages after they are logged in.