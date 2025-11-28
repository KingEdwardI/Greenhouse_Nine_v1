import React from 'react';
import { Flex, Text, Link as RadixLink } from '@radix-ui/themes';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = <ChevronRight size={16} className="gn-BreadcrumbSeparator" />,
  className,
}) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <Flex align="center" gap="2" asChild>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                {item.href && !isLast && !item.active ? (
                  <RadixLink href={item.href} color="gray" highContrast>
                    <Text size="2" weight="medium">
                      {item.label}
                    </Text>
                  </RadixLink>
                ) : (
                  <Text
                    size="2"
                    weight={isLast || item.active ? 'bold' : 'medium'}
                    color={isLast || item.active ? 'gray' : 'gray'}
                    style={{
                      color: isLast || item.active ? 'var(--gray-12)' : 'var(--gray-11)',
                    }}
                  >
                    {item.label}
                  </Text>
                )}

                {!isLast && (
                  <Text
                    as="span"
                    size="2"
                    color="gray"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: 'var(--space-2)',
                      marginRight: 'var(--space-2)',
                      opacity: 0.5,
                    }}
                    aria-hidden="true"
                  >
                    {separator}
                  </Text>
                )}
              </li>
            );
          })}
        </ol>
      </Flex>
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
