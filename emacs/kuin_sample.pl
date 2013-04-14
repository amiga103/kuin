=pod
{ kuin_sample.kn }
{ 素数の時だけドゥーになる数列を出力します☆ }
=cut

use strict;
use warnings;


for my $i (2..100)
{
    my $tesso = 1;
    for my $j (2 .. ($i-1))
    {
        if ($i % $j == 0)
        {
            $tesso = 0;
        }
    }
    if($tesso){
        printf("ドゥー\n");
    } else {
        printf("$i\n");
    }
}

