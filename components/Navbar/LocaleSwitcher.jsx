import Link from 'next/link';
import { useRouter } from 'next/router';
import { WhatsApp } from 'components/index';
import Flag from 'react-flagkit';
import { SocialMediaList } from 'constants/SocialMediaList.js';

function LocalSwitcher() {
    const { locales, asPath } = useRouter();
    return (
        <ul>
            {locales.map((l, i) => {
                return (
                    <li key={i} className="dm-flag-icon">
                        {l !== 'default' && (
                            <Link href={asPath} locale={l} legacyBehavior>
                                {l === 'es' ? (
                                    <a>
                                        <Flag country="ES" size={30} />
                                    </a>
                                ) : (
                                    <a>
                                        <Flag country="GB" size={30} />
                                    </a>
                                )}
                            </Link>
                        )}
                    </li>
                );
            })}
            <li>
                <WhatsApp
                    size={20}
                    href={SocialMediaList.WhatsApp.href}
                    target={SocialMediaList.WhatsApp.target}
                />
            </li>
        </ul>
    );
}
export default LocalSwitcher;
