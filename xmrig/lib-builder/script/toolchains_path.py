#!/usr/bin/env python
"""
    Get the toolchains path
"""
import argparse
import os
import sys

def get_host_tag_or_die():
    """Return the host tag for this platform. Die if not supported."""
    host_tags = {
        'linux': 'linux-x86_64',
        'darwin': 'darwin-x86_64',
        'win32': 'windows-x86_64',
        'cygwin': 'windows-x86_64',
    }
    host_tag = host_tags.get(sys.platform, None)
    if host_tag is None:
        sys.exit('Unsupported platform: ' + sys.platform)
    return host_tag

def get_toolchain_path_or_die(ndk, host_tag):
    """Return the toolchain path or die."""
    toolchain_path = os.path.join(ndk, 'toolchains/llvm/prebuilt', host_tag)
    if not os.path.exists(toolchain_path):
        sys.exit('Could not find toolchain: {}'.format(toolchain_path))
    return toolchain_path

def main():
    """Program entry point."""
    parser = argparse.ArgumentParser(description='Get the toolchains path')
    parser.add_argument('--ndk', required=True, help='The NDK Home directory')
    args = parser.parse_args()

    host_tag = get_host_tag_or_die()
    toolchain_path = get_toolchain_path_or_die(args.ndk, host_tag)
    print(toolchain_path)

if __name__ == '__main__':
    main()