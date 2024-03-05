#!/usr/bin/env perl

use strict;
use warnings;
use File::Find;

my @pages = ();

sub process_file {
    if ($File::Find::name =~ /.md$/) {
        my $p = substr($File::Find::name, 5);
        push(@pages, "\"$p\"");
    }
}

find(\&process_file, "blog");

print "[", join(",", reverse sort @pages), "]";