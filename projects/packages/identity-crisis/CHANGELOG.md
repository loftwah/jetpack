# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2021-11-09
### Added
- Add a method to unambiguously determine whether the site is experiencing identity crisis.

### Changed
- Updated package dependencies.
- Update webpack build config. Removes IE 11 support in the JavaScript.

## [0.3.1] - 2021-11-02
### Changed
- Add the idc url query args to remote requests
- Set `convertDeprecationsToExceptions` true in PHPUnit config.
- Update PHPUnit configs to include just what needs coverage rather than include everything then try to exclude stuff that doesn't.

## [0.3.0] - 2021-10-26
### Added
- Add redirect_uri parameter for IDC Start Fresh endpoint.
- Delete the migrate_for_idc option when a remote request returns migrated_for_idc

### Changed
- Updated package dependencies

## [0.2.8] - 2021-10-13
### Changed
- Updated package dependencies.

## [0.2.7] - 2021-10-12
### Added
- Add the new check_response_for_idc method to the Identity_Crisis class

### Changed
- Updated package dependencies

## [0.2.6] - 2021-09-28
### Changed
- Allow Node ^14.17.6 to be used in this project. This shouldn't change the behavior of the code itself.
- IDC: Rename the Identity_Crisis::sync_idc_optin method to Identity_Crisis:should_handle_idc. Add a new filter and constant that use the new name.
- Updated package dependencies.

## [0.2.5] - 2021-08-31
### Changed
- Updated package dependencies.

## [0.2.4] - 2021-08-30
### Changed
- Bump changelogger version
- Tests: update PHPUnit polyfills dependency (yoast/phpunit-polyfills).
- update annotations versions
- Update to latest webpack, webpack-cli and calypso-build
- Use Node 16.7.0 in tooling. This shouldn't change the behavior of the code itself.

## [0.2.3] - 2021-08-12
### Changed
- Updated package dependencies

## [0.2.2] - 2021-07-27
### Added
- Add jetpack_connection_disconnect_site_wpcom filter.

## [0.2.1] - 2021-07-13
### Changed
- Updated package dependencies.

## [0.2.0] - 2021-06-29
### Added
- Add jetpack_idc_disconnect hook to properly disconnect based on IDC settings and clear IDC options.

### Changed
- Migrate jetpack/v4/identity-crisis endpoints into package.
- Update node version requirement to 14.16.1

## 0.1.0 - 2021-06-15
### Added
- Sync: Adding the Identity_Crisis package.

### Changed
- Updated package dependencies.
- Use Connection/Urls for home_url and site_url functions migrated from Sync.

[0.4.0]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.2.8...v0.3.0
[0.2.8]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.2.7...v0.2.8
[0.2.7]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.2.6...v0.2.7
[0.2.6]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.2.5...v0.2.6
[0.2.5]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.2.4...v0.2.5
[0.2.4]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/Automattic/jetpack-identity-crisis/compare/v0.1.0...v0.2.0
