git
filter-branch
--env-filter
 >> change-author.sh
echo OLD_EMAIL="gsl.devchamber@gmail.com" >> change-author.sh
echo CORRECT_NAME="mySmartmu" >> change-author.sh
echo CORRECT_EMAIL="mysmart.mu@gmail.com" >> change-author.sh
echo. >> change-author.sh
echo if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ] >> change-author.sh
echo then >> change-author.sh
echo     export GIT_COMMITTER_NAME="$CORRECT_NAME" >> change-author.sh
echo     export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL" >> change-author.sh
echo fi >> change-author.sh
echo if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ] >> change-author.sh
echo then >> change-author.sh
echo     export GIT_AUTHOR_NAME="$CORRECT_NAME" >> change-author.sh
echo     export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL" >> change-author.sh
echo fi >> change-author.sh
echo 
--tag-name-filter
cat
--branches
--tags
